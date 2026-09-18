# AB Tech Learning — final frontend

## Run locally

Use Node.js 20.19+ or Node.js 22.12+.

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal. For a phone on the same Wi-Fi, run `npm run dev -- --host 0.0.0.0` and use your computer's network URL.

```bash
npm run build
npm run preview
```

## Completed phases

1. Your red ABTECH logo is used in the header, footer and favicon. This project has no login, registration or student dashboard.
2. One Services section replaces the separate Courses section. Four services, navigation links, footer labels and enquiry buttons are included.
3. Admission Enquiry popup opens from the header, mobile navigation, Apply Now and each service card. Service cards preselect their service. Fields: name, Indian mobile number, email (any provider), service, optional message and contact consent. Includes validation, Escape and close controls, native modal focus management and scroll locking. The contact section uses the same form.
4. Mobile navigation, responsive form layout, focus styles and reduced-motion support are included.

## Submission setup — required before receiving enquiries

This is a frontend-only project. It does not save enquiries in a database or email them. Without a configured endpoint, Submit enquiry displays an honest not-sent message and retains the entered details. No personal details are stored in localStorage.

Copy `.env.example` to `.env.local` and set `VITE_ENQUIRY_ENDPOINT` to your backend URL. Restart the development server or rebuild after changing it. Never put secret keys in VITE variables: they are public.

The form sends JSON via POST:

```json
{"name":"Test Student","phone":"9876543210","email":"test@example.com","service":"admission","message":"Please contact me","consent":true}
```

Contact form service IDs: admission, open-school, career, student-support.
Admission popup service IDs: nios, bosse, ignou, college-admissions, career-counselling, general-guidance.
The popup uses the original site styling, retains the six admission options, and does not request an optional message.
The server must validate the data, store or deliver it, then return a 2xx response with JSON `{"success":true}`. Only this response triggers a success message. Configure CORS when hosting the API on another origin. Requests time out after 15 seconds; network errors preserve entered values. Implement duplicate protection in the backend if needed.

## Content configuration

Edit `src/config/siteConfig.js` to change your service descriptions, logo and contact details. Phone, WhatsApp and address use the supplied institute details. The student review is displayed as supplied, under Reviews without a student name, as requested. Email, social links, legal links, experience and student statistics remain placeholder content: replace them with verified institute details before publishing.

Logo: `public/images/logo.jpg`. The image has white space within its original artwork; use a tightly framed source if you want a larger visible mark without enlarging the header.

No deployment has been performed.
