import {cn} from "@/lib/utils";

export default function Page() {
    return (
        <div className={'text-[13px]'}>
            <h1 className={'font-bold text-[40px] mb-[10px]'}>Privacy Policy</h1>
            <p className={'mb-[5px]'}><span className={'font-bold'}>Effective Date:</span> 26/050/2025</p>
            <p className={'mb-[15px]'}><span className={'font-bold'}>Last Updated:</span> 26/05/2025</p>

            <h2 className={'font-semibold text-[18px] mb-[10px]'}>1. Introduction</h2>
            <p className={'text-[13px]'}> This Privacy Policy explains how we collect, use, and protect your information
                when you use our application ("App") that enables users to automate Facebook post publishing via a
                desktop bot. By using our App and logging in via Facebook, you agree to the practices described in this
                policy.</p>

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 2. Information We Collect </h2>
            When you log in using Facebook, we collect the following information:

            Access Token – a temporary token provided by Facebook after successful authentication.

            Facebook User ID – used solely for linking the token to the correct user within our desktop bot.

            We do not collect:

            Your name, email address, or profile information

            Your friends list or other private data

            Any Facebook content beyond what is required to publish posts on your behalf

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 3. How We Use Your Information</h2>
            We use your Access Token and User ID exclusively to:

            Authenticate your identity with Facebook

            Enable automated posting through your Facebook account using the desktop bot

            We do not sell, rent, or share your personal data or tokens with any third party.

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 4. Data Storage and Retention </h2>
            Your Access Token is stored locally on your device and is not stored on our servers.

            We do not retain any of your personal data or Facebook information on external servers.

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 5. Data Security</h2>
            We implement reasonable measures to protect your token on the device, but ultimate responsibility for
            securing local files lies with the user. We encourage you to keep your desktop environment secure and
            use tokens only with trusted applications.

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 6. Third-Party Services</h2>
            Our App uses Facebook Login, which is governed by Facebook's (Meta's) own privacy policies. Please
            review Facebook's Privacy Policy for details on how your data is handled by them:
            https://www.facebook.com/policy.php

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 7. User Control and Revocation</h2>
            You can revoke the app’s access to your Facebook account at any time by:

            Visiting your Facebook account settings under "Apps and Websites"

            Removing the application from the authorized list

            After revocation, the token will become invalid and the App will no longer be able to post on your
            behalf.

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 8. Changes to This Policy</h2>
            We may update this Privacy Policy from time to time. You will be notified of any significant changes via
            in-app notification or email (if applicable).

            <h2 className={'font-semibold text-[18px] mb-[10px] mt-[10px]'}> 9. Contact Us</h2>
            If you have any questions about this Privacy Policy or your data, please contact us:
            <p className={'mt-[10px]'}><span className={'font-bold'}>Email:</span> pawel.czekaj@3wart.pl</p>
                <p><span className={'font-bold'}>App Name:</span> Poster</p>

        </div>
    )
}