# Rootwave Technologies Website

A complete static website prepared for GitHub Pages and the custom domain **rootwavetechnologies.com**.

## Included
- Responsive multi-page website
- Services, pricing, portfolio concepts, company information and quote form
- Privacy, terms, refund and service-delivery policies
- Honest disabled-payment modal
- SEO metadata, structured data, sitemap, robots.txt, favicon and social card
- CNAME file for the custom domain

## Publish on GitHub Pages
1. Create a GitHub repository, for example `rootwave-technologies`.
2. Upload every file and folder from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. In **Custom domain**, enter `rootwavetechnologies.com`.
7. Configure the domain DNS records with the registrar.
8. When available, enable **Enforce HTTPS**.

## Domain DNS
For the apex domain, use the current GitHub Pages A records shown in GitHub's official documentation.  
For `www`, create a CNAME pointing to your GitHub Pages host, such as `YOUR-GITHUB-USERNAME.github.io`.

## Quote form activation
The quote form uses FormSubmit and sends to `rootwavetechnologies@gmail.com`. The first live submission normally triggers an activation email. Open that email and confirm the form once. After activation, new quote requests are delivered to the inbox.

## Payment status
All `Pay / Request Invoice` buttons currently show an honest message that online payment is not connected and that no charge was attempted.

After merchant approval and secure backend hosting:
1. Replace the modal action with hosted checkout or your server endpoint.
2. Keep secret keys on the server only.
3. Verify every transaction server-side before marking an invoice paid.
4. Add webhook verification and reconciliation.

## Pricing logic
- Below $500: full payment before work begins.
- $500–$1,499: 60% deposit, 40% before launch.
- $1,500+: 40% deposit, 30% at design approval, 30% before launch.
- Domains, hosting, premium software, advertising and third-party fees are excluded unless quoted.
- Reduce scope rather than discounting more than 10–15%.
- Review prices after every 3–5 successful projects.

## Important compliance note
The public site uses the registered business name, registration number, contact details, service descriptions, address and customer policies. Keep all information consistent with official documents and payment-provider applications. Never add invented clients, reviews, locations or transaction claims.


## Paystack contact update
The public contact number is +254 715 996 223 and the registered office address explicitly includes Kenya.
