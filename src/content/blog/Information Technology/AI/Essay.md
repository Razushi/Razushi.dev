**Tone & Style Rules**

- Write in a **concise technical report style**, as if written by a security engineer or auditor.
    
- Avoid corporate filler words: no “aligns with”, “synergy”, “holistic approach”, or “transformational”. Use plain language: “fits under”, “meets”, “fails”, “requires”.
    
- No em-dashes. Use colons, semicolons, or brackets instead.
    
- Keep sentences **short and declarative** (ideally under 20 words). Do not repeat the subject if the context makes it obvious.
    
- Paragraphs should be **self-contained units**: each should have a clear focus (e.g., one risk, one solution, one regulatory point).
    
- Provide **just enough explanation** for flow. Explain _why_ something matters in one sentence max. Avoid extended storytelling or history lessons unless asked.
    

---

**Structure Rules**

- Follow the scaffold provided (Scope, Frameworks, Technical Vectors, Monetary Changes, Migration, Security+BC/DR, Conclusion).
    
- Inside each major section, use **subheaders** to break apart topics (like the student example did). Example: under “Technical Threat Vectors”, have subheaders for “Identity and Access Management”, “Encryption”, “Disaster Recovery”, “Logging and Monitoring”, etc.
    
- Each subheader gets 1–3 tight paragraphs: what the issue is, what changes in cloud vs data centre, and what AWS offers as a solution.
    

---

**Content Rules**

- Use course content (labs, lectures, readings) as **the backbone**.
    
- Layer in **your security engineering notes** where they naturally reinforce:
    
    - CIA Triad under “What is Security”
        
    - Control categories/types under “Technical Threat Vectors”
        
    - STIGs vs ISM under “Frameworks”
        
    - Risk quantification (ALE/SLE/ARO) under “Risk Management”
        
- Do not dump notes verbatim. Blend them in as evidence or examples.
    
- For each framework or law mentioned, give _one line of history_ (why it exists), then _one line of impact_ (what it does now). No extended backstory.
    
- For AWS services, always tie them back to a concrete risk or requirement. Example: “IAM prevents privilege escalation by enforcing least privilege. This passes as a technical preventive control.”
    

---

**Length & Density Rules**

- Each **major section** (Frameworks, Technical Threat Vectors, Monetary Changes, Migration, Security/BCDR) should be 600–800 words.
    
- Each **subheader** should be ~150 words: tight but with enough detail to look authoritative.
    
- Avoid repeating definitions. Instead, assume technical literacy but explain where the difference matters (e.g., why qualitative risk analysis is used when quantitative isn’t feasible).
    

---