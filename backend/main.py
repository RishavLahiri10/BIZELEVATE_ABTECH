"""
AB Tech Learning Educational Services — Backend API
-----------------------------------------------------
A minimal FastAPI backend that receives contact-form submissions
from the React frontend and (optionally) forwards them by email
or stores them for the admin to review.

Run locally:
    pip install -r requirements.txt
    uvicorn main:app --reload --port 8000

The frontend's ContactForm.jsx posts to `/api/contact`. In production,
either:
  1. Deploy this API and point the frontend fetch URL at its public
     address, or
  2. Reverse-proxy `/api/*` from your web server to this service.
"""

from datetime import datetime

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(
    title="AB Tech Learning Educational Services API",
    description="Backend API for contact form submissions and enquiries.",
    version="1.0.0",
)

# ---------------------------------------------------------------------
# CORS CONFIGURATION
# Update `allow_origins` with your deployed frontend URL(s) before
# going to production. "*" is convenient for local development only.
# ---------------------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # e.g. ["https://www.abtechlearning.example.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactMessage(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=6, max_length=20)
    message: str = Field(..., min_length=1, max_length=2000)


# In-memory store for demo purposes only.
# Replace with a real database (PostgreSQL, MongoDB, etc.) in production.
_submissions: list[dict] = []


@app.get("/api/health")
def health_check():
    """Simple health check endpoint."""
    return {"status": "ok", "service": "ab-tech-learning-api"}


@app.post("/api/contact", status_code=201)
def submit_contact_form(payload: ContactMessage):
    """
    Receive a contact form submission from the website.

    TODO (production):
      - Send an email/SMS notification to the counselling team
      - Save the submission to a persistent database
      - Add rate-limiting / spam protection (e.g. captcha, honeypot field)
    """
    if not payload.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    record = {
        "name": payload.name,
        "email": payload.email,
        "phone": payload.phone,
        "message": payload.message,
        "received_at": datetime.utcnow().isoformat(),
    }
    _submissions.append(record)

    # Placeholder for sending an email notification, e.g. via SMTP or
    # a transactional email API (SendGrid, Postmark, etc.)
    # send_notification_email(record)

    return {"success": True, "message": "Thank you! Your enquiry has been received."}


@app.get("/api/contact")
def list_submissions():
    """
    Admin-only endpoint to view submissions (demo purposes).
    Secure this with authentication before deploying publicly.
    """
    return {"count": len(_submissions), "submissions": _submissions}
