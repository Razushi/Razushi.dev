```
You are given a PDF (lecture slides, notes, etc). Your task: extract **all text** into clean, structured markdown notes and return it in a single markdown (.md) file. 

You will also send a brief preview.

Rules:
- Wrap the **entire output** inside a single triple-backtick markdown block (so I can copy-paste it all).
- Use `##` for main topics (big headers).
- Use `###` for subtopics (subheaders).
- Use `-` for bullet points.
- Do **not** insert horizontal rules (`---`) or slide markers (“Slide X”).
- Do not add bold, italics, or extra formatting, unless it already exists as headers or lists.
- For code or pseudo-code sections, use **single backticks** ` on each line, not triple backticks (to avoid breaking the big block).
- Do not skip any content: extract everything textual from the PDF.
- “Ignore diagrams (they won’t show up in text extraction anyway), but if a caption or alt-text exists (e.g. ‘Figure 2.1…’), include it as-is.”
```

---

```
You are given a PDF (lecture slides, notes, etc).  
Extract **all text** into clean, structured markdown notes.  

Rules:
- Output must be a downloadable `.md` file.  
- Use this exact structure:

## Topic
### Subtopic
- Bullet
- Bullet
### Next Subtopic
- Bullet
## Next Topic
### Subtopic
- Bullet

- Do not insert extra blank lines between sections. Only use headers (`##`, `###`) and bullets (`-`).  
- Do not add bold, italics, or horizontal rules unless they already exist in the source.  
- For code or pseudo-code, use single backticks (`) per line (never triple backticks).  
- Do not skip any content: include all text, captions, and alt-text.  
- Include **all multiple-choice quiz questions** with every answer option listed, and mark the correct answer clearly.  
```

---

```
You are given a PDF (lecture slides, notes, etc). Extract ALL visible text into clean, structured markdown notes.

HARD REQUIREMENTS
- Output must be a downloadable `.md` file (attach it), NOT pasted inline.
- Use EXACTLY this structure and only these elements:
  ## Topic
  ### Subtopic
  - Bullet
- No extra blank lines anywhere. Only `##`, `###`, and `-`.
- Do not add bold/italics/horizontal rules unless they exist in source.
- For code/pseudocode, use ONE backtick per line (never triple backticks) like: - `example()`.
- Do not skip ANY content: include title pages, repeated “roadmap” slides, captions, footers, tiny text, and any alt-text.
- Include ALL multiple-choice quiz questions with every answer option listed; append “(Correct)” to the correct option. If the slide doesn’t state the correct answer, add a separate bullet: - [Correct answer not shown].
- Do NOT add “Slide X” markers or any extra headings.

PAGE-BY-PAGE EXTRACTION (MANDATORY)
- Process pages strictly in order, page 1..N.
- For each page:
  - Capture every selectable text item (headings, lists, paragraphs, table cells as bullets, figure captions).
  - If a diagram/image contains visible selectable text, include that text.
  - If a page/region is image-only or unreadable, add a placeholder bullet so nothing is silently dropped:
    - [Image-only/no selectable text on this page]
    - If a caption is visible but the image text isn’t, include the caption normally and still add the placeholder.

STRUCTURING RULES
- Preserve document order; don’t merge or reorganize.
- Use meaningful “## Topic” and “### Subtopic” labels derived from the slide’s headings. If a page has no heading, create a neutral subtopic like “### Notes”.
- Convert tables to bullets row-by-row in reading order.

DELIVERABLES
1) Attach a single `.md` file named after the PDF (e.g., `Link_Layer_Notes.md`), containing ONLY the notes in the specified format.
2) In chat:
   - Show a “Coverage Report” (not in the `.md`): 
     - Pages processed: N of N
     - Pages marked image-only: [list]
     - Any quiz items with unknown correct answers: [list or “none”]

QUALITY GATES (FAIL CLOSED)
- If you can’t parse some page(s), you must still include the placeholders and reflect that in the Coverage Report.
- Do not summarise or deduplicate repeated slides; include them as-is.
```

---

```
You are given a PDF (lecture slides, notes, etc). Extract **ALL visible text verbatim** into clean, structured markdown notes.  

HARD REQUIREMENTS
- Output must be a downloadable `.md` file (attach it), NOT pasted inline.  
- Use EXACTLY this structure and only these elements:  
  ## Topic  
  ### Subtopic  
  - Bullet  
- No extra blank lines anywhere. Only `##`, `###`, and `-`.  
- Do not add bold/italics/horizontal rules unless they exist in the source.  
- For code/pseudocode, use ONE backtick per line (never triple backticks) like: `example()`.  
- Do not skip ANY content: include title pages, repeated “roadmap” slides, captions, footers, tiny text, and any alt-text.  
- Include ALL multiple-choice quiz questions with every answer option listed; append “(Correct)” to the correct option. If the slide doesn’t state the correct answer, add a separate bullet: `- [Correct answer not shown]`.  
- Do NOT add “Slide X” markers or extra headings.  

PAGE-BY-PAGE EXTRACTION (MANDATORY)  
- Process pages strictly in order, page 1..N.  
- For each page:
  - Capture **every single text element exactly as written**, without rewording or summarising.  
  - Preserve original phrasing — do not shorten sentences or restructure points.  
  - The only allowed changes are **minor grammar/punctuation fixes for readability**, or inserting a word for clarity (keep this minimal).  
  - If a page/region is image-only or unreadable, add a placeholder bullet so nothing is silently dropped:  
    - `[Image-only/no selectable text on this page]`  
    - If a caption is visible but the image text isn’t, include the caption normally and still add the placeholder.  

STRUCTURING RULES  
- Preserve document order exactly; don’t merge or reorganize.  
- Use meaningful “## Topic” and “### Subtopic” labels derived from slide headings. If no heading, create a neutral subtopic like “### Notes”.  
- Convert tables to bullets row-by-row in reading order.  

DELIVERABLES  
1. Attach a single `.md` file named after the PDF (e.g., `Link_Layer_Notes.md`), containing ONLY the notes in the specified format.  
2. In chat:  
   - Show a “Coverage Report” (not in the `.md`):  
	- Pages processed: [exact number of pages extracted] of [exact total page count in the uploaded PDF]
	- Pages marked image-only: [list]
	- Any quiz items with unknown correct answers: [list or “none”]

QUALITY GATES (FAIL CLOSED)  
- If you can’t parse some page(s), you must still include the placeholders and reflect that in the Coverage Report.  
- Do not summarise, rephrase, or deduplicate repeated slides; include them **exactly as-is**.  
```

---

```
You are given a PDF (lecture slides, notes, etc).  
Extract **all visible text verbatim** into clean, structured markdown notes.

HARD REQUIREMENTS
- Output must be a single downloadable `.md` file (attach it), not inline text.  
- Use EXACTLY this structure and only these elements:  
  ## Topic  
  ### Subtopic  
  - Bullet  
- No extra blank lines. Only `##`, `###`, and `-`.  
- No bold/italics/horizontal rules unless present in source.  
- Code/pseudocode must be in single backticks (`), never triple.  
- Process **every page sequentially** (page 1 → last page).  
- Do not skip duplicated slides, footers, captions, or tiny text.  
- If a page is image-only or has no selectable text: insert placeholder  
  `- [Image-only/no selectable text on this page]`.  
- For multiple-choice quiz questions: include all options, append “(Correct)” only if slide marks it.  
- Do **not** summarise, shorten, or reorganise content.

PAGE HANDLING
- Continue extraction until the actual PDF end (EOF).  
- Report the actual page count from the file metadata (e.g., “73 pages”), not parser guesswork.  
- Produce a Coverage Report at the end:
  - Pages processed: [x of total]  
  - Pages marked image-only: [list numbers]  
  - Quiz items with unknown correct answers: [list or “none”]

DELIVERABLE
- Attach one `.md` file named after the PDF.
- Do not show inline previews unless I ask.
```