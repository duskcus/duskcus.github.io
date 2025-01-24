---
layout: default
title: Laravel PDF to Text
---

https://github.com/spatie/pdf-to-text

```
$pdfFile = $request->file('pdf_file');
$pdfPath = $pdfFile->getRealPath();  // Temporary file path

$text = Pdf::getText($pdfPath);
```