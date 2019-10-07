# Historical Quotes Finder

This is a simple Web Application for getting a company's historical stock quotes for a specific date range.
The results are sent to the provided email.

The application uses the Symfony framework.

Symfony goodies used: Routing annotations

Prerequisites:
- PHP
- Composer
- NPM

Running the application:
1) Run "composer install"
2) Run "npm install"
3) Run "npm run build" and press "Ctrl+c" after completion (give "y" for terminating the batch job)
4) Run "php -S 127.0.0.1:8000 -t public"
5) Navigate to http://localhost:8000/