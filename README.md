# Data Loaders in indoxArcg

This documentation organizes supported data loaders into logical categories based on file formats and use cases. Each loader handles specific document types within indoxArcg's RAG/CAG pipeline.

## Categories Overview

1. **Linguistic & Specialized Formats**
   **Handling linguistic annotations and specialized document types**

   - `docling`: Processing linguistic corpora and annotated text formats
   - `conllu`: Universal Dependencies treebank processing
   - `eaf`: ELAN Annotation Framework files

2. **Multi-Format Unstructured Data**
   **General-purpose parsing for heterogeneous documents**

   - `unstructured`: Unified interface for diverse file types (PDF, HTML, DOCX, etc.)
   - `auto`: Format detection and automatic parser selection

3. **PDF Processors**
   **For parsing text and metadata from PDF documents**

   - `pdfminer`: Text extraction from PDFs with complex layouts
   - `pdfplumber`: Advanced PDF text and table extraction
   - `pypdf2`: Basic PDF text extraction and manipulation

4. **Office Document Loaders**
   **Microsoft Office file format handlers**

   - `docx`: Word document processing
   - `pptx`: PowerPoint presentation extraction
   - `openpyxl`: Excel spreadsheet parsing

5. **Structured Data Formats**
   **Tabular and structured data processors**

   - `csv`: Comma-separated values parsing
   - `json`: JSON document processing
   - `sql`: SQL query results handling

6. **Scientific Data Formats**
   **Specialized scientific data handlers**

   - `scipy`: Scientific data file support (.mat, .wav)
   - `joblib`: Python object serialization files

7. **Text & Web Formats**
   **Basic text processing and web content extraction**
   - `txt`: Plain text file processing
   - `bs4`: BeautifulSoup HTML/XML parsing
   - `rtf`: Rich Text Format processing

## Loader Comparison

| Category                  | Loaders              | Text Extraction | Metadata | Images | Tables | Installation Complexity |
| ------------------------- | -------------------- | --------------- | -------- | ------ | ------ | ----------------------- |
| Linguistic & Specialized  | docling, conllu      | ✅              | ✅       | ❌     | ❌     | Medium                  |
| Multi-Format Unstructured | unstructured, auto   | ✅              | ✅       | ✅     | ✅     | High                    |
| PDF Processors            | pdfminer, pypdf\*    | ✅              | ✅       | ❌     | ✅     | Medium                  |
| Office Documents          | docx, pptx, openpyxl | ✅              | ✅       | ✅     | ✅     | Low                     |
| Structured Data           | csv, json, sql       | ✅              | ✅       | ❌     | ✅     | Low                     |
| Scientific Data           | scipy, joblib        | ❌              | ✅       | ✅     | ✅     | High                    |
| Text & Web Formats        | txt, bs4, rtf        | ✅              | ✅       | ❌     | ❌     | Medium                  |

## Quick Start Guide

### Installation

```bash
# Linguistic & Unstructured
pip install docling unstructured

# PDF Processors
pip install pdfminer.six pdfplumber pypdf2

# Office Documents
pip install python-docx python-pptx openpyxl

# Scientific Data
pip install scipy joblib
```

### Basic Usage

```python
from indoxArcg.data_loaders import (
    DoclingLoader,
    UnstructuredLoader,
    PDFLoader
)

# Process linguistic annotations
ling_loader = DoclingLoader()
annotations = ling_loader.load("corpus.eaf")

# Auto-detect document type
auto_loader = UnstructuredLoader()
content = auto_loader.load("unknown_file.doc")

# PDF with embedded elements
pdf_loader = PDFLoader(extract_images=True)
pdf_data = pdf_loader.load("research.pdf")
```

### Troubleshooting

#### Linguistic Format Issues

- Verify annotation schema compliance
- Use conllu loader for Universal Dependencies formats
- Check temporal alignment in EAF files

#### Unstructured Processing Errors

- Install OCR dependencies for image-heavy PDFs
- Specify content types: unstructured.TextLoader()
- Increase chunk size for complex documents

#### PDF Image Extraction

- Ensure Poppler utilities are installed
- Use pdfplumber for table recognition
- Check image DPI settings

#### Office Document Metadata

- Enable extended property extraction
- Handle revision histories in Word docs
- Use openpyxl for Excel named ranges

### Detailed Guides

- Linguistic Data Handling
- Unstructured Processing
- PDF Processing Techniques
- Office Document Handling
- Structured Data Parsing
- Scientific Data Loading
- Text & Web Processing
