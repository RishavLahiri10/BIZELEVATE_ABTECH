import React, { createContext, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import EnquiryForm from "./EnquiryForm";

const AdmissionContext = createContext(null);
export const useAdmission = () => useContext(AdmissionContext);

export default function AdmissionProvider({ children }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const previousOverflow = useRef("");
  const [selection, setSelection] = useState({ service: "", key: 0 });
  function openAdmission(service = "") {
    trigger.current = document.activeElement;
    previousOverflow.current = document.body.style.overflow;
    setSelection(previous => ({ service, key: previous.key + 1 }));
    // showModal makes the background inert and enables native Escape/focus handling.
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
  }
  // Restore scrolling and focus; the mobile enquiry trigger may have unmounted.
  function restore() {
    document.body.style.overflow = previousOverflow.current;
    if (trigger.current?.isConnected) trigger.current.focus();
    else document.querySelector('[aria-controls="mobile-navigation"]')?.focus();
  }
  return (
    <AdmissionContext.Provider value={openAdmission}>
      {children}
      {createPortal(
        <dialog ref={dialog} className="admission-dialog" aria-labelledby="admission-title" aria-describedby="admission-description" onClose={restore} onClick={event => {
          if (event.target === event.currentTarget) {
            // Close only on backdrop clicks, not on empty space inside the dialog.
            const rect = event.currentTarget.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current.close();
          }
        }}>
          <div className="admission-heading">
            <div><p className="eyebrow">Let’s plan your next step</p><h2 id="admission-title">Admission Enquiry</h2></div>
            <button type="button" autoFocus onClick={() => dialog.current.close()} className="admission-close" aria-label="Close admission enquiry">×</button>
          </div>
          <p id="admission-description" className="text-sm text-slate-600 mb-6">Share your details and the guidance you are looking for.</p>
          <EnquiryForm admission key={selection.key} initialService={selection.service} />
        </dialog>, document.body
      )}
    </AdmissionContext.Provider>
  );
}
