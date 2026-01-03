import PyPDF2
import sys

try:
    with open('Web_Developer_Interview_Task.pdf', 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print(text)
except Exception as e:
    print(f"Error: {e}")
    print("Trying alternative approach...")
    try:
        import pdfplumber
        with pdfplumber.open('Web_Developer_Interview_Task.pdf') as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text() + "\n"
            print(text)
    except Exception as e2:
        print(f"Alternative approach failed: {e2}")
