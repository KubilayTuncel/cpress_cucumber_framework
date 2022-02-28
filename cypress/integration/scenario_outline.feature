Feature: Baskentler
Scenario Outline: baskentleri arama
Given url git
Given Kullanici arama yapacak "<world capitals>"
Given Arama yapildigini kontrol edecek "<world capitals>"

Examples:
    | world capitals |
    | london|
    | paris |
    |madrid |
    |vienna |
