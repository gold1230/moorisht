import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    /*
    |--------------------------------------------------------------------------
    | Read FormData
    |--------------------------------------------------------------------------
    */

    const formData = await request.formData();

    /*
    |--------------------------------------------------------------------------
    | Basic Information
    |--------------------------------------------------------------------------
    */

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const country = String(formData.get("country") || "").trim();
    const travelDate = String(
      formData.get("travelDate") || ""
    ).trim();
    const travelers = String(
      formData.get("travelers") || ""
    ).trim();
    const message = String(
      formData.get("message") || ""
    ).trim();

    /*
    |--------------------------------------------------------------------------
    | Validation
    |--------------------------------------------------------------------------
    */

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        {
          status: 400,
        }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Brevo Environment Variables
    |--------------------------------------------------------------------------
    */

    const apiKey = process.env.BREVO_API_KEY;

    const senderEmail =
      process.env.BREVO_SENDER_EMAIL;

    const senderName =
      process.env.BREVO_SENDER_NAME ||
      "Moorish Tour";

    const recipientEmail =
      process.env.TOUR_REQUEST_EMAIL;

    if (
      !apiKey ||
      !senderEmail ||
      !recipientEmail
    ) {
      console.error(
        "Missing Brevo environment variables:",
        {
          hasApiKey: Boolean(apiKey),
          hasSenderEmail:
            Boolean(senderEmail),
          hasRecipientEmail:
            Boolean(recipientEmail),
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured correctly.",
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Plain Text Email Sent to Moorish Tour
    |--------------------------------------------------------------------------
    */

    const textContent = `
MOROCCO TOUR MESSAGE FROM CLIENT

CONTACT DETAILS
--------------------------------

Name:
${name}

Email:
${email}

Phone / WhatsApp:
${phone || "Not specified"}

Country:
${country || "Not specified"}


CLIENT DETAILS
--------------------------------

Travel Date:
${travelDate || "Not specified"}

Number of Travelers:
${travelers || "Not specified"}


CLIENT MESSAGE
--------------------------------

${message || "No message provided"}
    `.trim();

    /*
    |--------------------------------------------------------------------------
    | HTML Email Sent to Moorish Tour
    |--------------------------------------------------------------------------
    */

    const htmlContent = `
<!DOCTYPE html>

<html>

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f8fafc;
    font-family:Arial,Helvetica,sans-serif;
    color:#1e293b;
  "
>

<div
  style="
    width:100%;
    padding:35px 15px;
    box-sizing:border-box;
  "
>

<div
  style="
    max-width:700px;
    margin:0 auto;
    background:#ffffff;
    border:1px solid #e2e8f0;
    border-radius:20px;
    overflow:hidden;
  "
>

  <!-- HEADER -->

  <div
    style="
      background:#102043;
      padding:32px;
    "
  >

    <p
      style="
        margin:0;
        color:#f59e0b;
        font-size:12px;
        font-weight:bold;
        text-transform:uppercase;
        letter-spacing:1px;
      "
    >
      Moorish Tour Website
    </p>

    <h1
      style="
        margin:8px 0 0;
        color:#ffffff;
        font-size:26px;
        line-height:1.3;
      "
    >
      New Morocco Tour Contact
    </h1>

    <p
      style="
        margin:10px 0 0;
        color:#cbd5e1;
        font-size:14px;
        line-height:1.7;
      "
    >
      A visitor sent a new message through the website.
    </p>

  </div>

  <!-- CONTENT -->

  <div
    style="
      padding:30px;
    "
  >

    ${emailSectionTitle(
      "Contact Details"
    )}

    <div
      style="
        background:#fffaf3;
        padding:20px;
        border-radius:14px;
      "
    >

      ${emailRow(
        "Name",
        escapeHtml(name)
      )}

      ${emailRow(
        "Email",
        escapeHtml(email)
      )}

      ${emailRow(
        "Phone / WhatsApp",
        escapeHtml(
          phone || "Not specified"
        )
      )}

      ${emailRow(
        "Country",
        escapeHtml(
          country || "Not specified"
        )
      )}

    </div>

    <div
      style="
        margin-top:30px;
      "
    >

      ${emailSectionTitle(
        "Client Details"
      )}

      ${emailRow(
        "Travel Date",
        escapeHtml(
          travelDate || "Not specified"
        )
      )}

      ${emailRow(
        "Number of Travelers",
        escapeHtml(
          travelers || "Not specified"
        )
      )}

    </div>

    <div
      style="
        margin-top:28px;
      "
    >

      ${emailSectionTitle(
        "Client Message"
      )}

      <div
        style="
          background:#f8fafc;
          padding:20px;
          border-radius:12px;
          line-height:1.8;
          color:#475569;
        "
      >
        ${nl2br(
          message ||
            "No message provided"
        )}
      </div>

    </div>

  </div>

  <!-- FOOTER -->

  <div
    style="
      background:#f8fafc;
      padding:20px 30px;
      border-top:1px solid #e2e8f0;
      color:#64748b;
      font-size:12px;
    "
  >
    This message was sent through the Moorish Tour website.
  </div>

</div>

</div>

</body>

</html>
    `;

    /*
    |--------------------------------------------------------------------------
    | Main Email Payload
    |--------------------------------------------------------------------------
    */

    const mainEmailPayload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },

      to: [
        {
          email: recipientEmail,
          name: "Moorish Tour",
        },
      ],

      /*
      | If you click Reply,
      | the reply goes directly to the traveler.
      */

      replyTo: {
        email,
        name,
      },

      subject:
        `New Morocco Tour Contact - ${name}`,

      textContent,

      htmlContent,
    };

    /*
    |--------------------------------------------------------------------------
    | Send Main Email to Moorish Tour
    |--------------------------------------------------------------------------
    */

    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          accept: "application/json",
          "content-type":
            "application/json",
          "api-key": apiKey,
        },

        body: JSON.stringify(
          mainEmailPayload
        ),

        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      }
    );

    /*
    |--------------------------------------------------------------------------
    | Main Email Error
    |--------------------------------------------------------------------------
    */

    if (!brevoResponse.ok) {
      const brevoError =
        await brevoResponse.text();

      console.error(
        "======================================"
      );

      console.error(
        "BREVO CONTACT EMAIL ERROR"
      );

      console.error(
        "Status:",
        brevoResponse.status
      );

      console.error(
        "Response:",
        brevoError
      );

      console.error(
        "======================================"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send the message.",
        },
        {
          status: 502,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Main Email Successfully Sent
    |--------------------------------------------------------------------------
    */

    const mainResult = await brevoResponse.json().catch(() => null);

    /*
    |--------------------------------------------------------------------------
    | Confirmation Email - Plain Text
    |--------------------------------------------------------------------------
    */

    const confirmationText = `
Hello ${name},

Thank you for contacting Moorish Tour.

We have successfully received your message.

Our Morocco travel team will review your request and contact you using this email address:

${email}

Please wait for our response. You do not need to send the form again.


YOUR REQUEST SUMMARY
--------------------------------

Travel Date:
${travelDate || "Not specified"}

Number of Travelers:
${travelers || "Not specified"}

Phone / WhatsApp:
${phone || "Not specified"}

Country:
${country || "Not specified"}

Your Message:
${message || "No message provided"}


Thank you for contacting Moorish Tour.

Moorish Tour
Private Morocco Tours & Custom Travel Experiences
    `.trim();

    /*
    |--------------------------------------------------------------------------
    | Confirmation Email - HTML
    |--------------------------------------------------------------------------
    */

    const confirmationHtml = `
<!DOCTYPE html>

<html>

<head>

  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f8fafc;
    font-family:Arial,Helvetica,sans-serif;
    color:#1e293b;
  "
>

<div
  style="
    width:100%;
    padding:35px 15px;
    box-sizing:border-box;
  "
>

<div
  style="
    max-width:650px;
    margin:0 auto;
    background:#ffffff;
    border:1px solid #e2e8f0;
    border-radius:20px;
    overflow:hidden;
  "
>

  <!-- HEADER -->

  <div
    style="
      background:#102043;
      padding:38px 30px;
      text-align:center;
    "
  >

    <div
      style="
        display:inline-block;
        padding:8px 15px;
        margin-bottom:16px;
        background:rgba(255,255,255,0.08);
        border-radius:30px;
        color:#fbbf24;
        font-size:12px;
        font-weight:bold;
        text-transform:uppercase;
        letter-spacing:1px;
      "
    >
      Moorish Tour
    </div>

    <h1
      style="
        margin:0;
        color:#ffffff;
        font-size:28px;
        line-height:1.3;
      "
    >
      We Received Your Message
    </h1>

    <p
      style="
        margin:12px auto 0;
        max-width:500px;
        color:#cbd5e1;
        font-size:15px;
        line-height:1.7;
      "
    >
      Thank you for contacting Moorish Tour.
    </p>

  </div>

  <!-- CONTENT -->

  <div
    style="
      padding:32px 30px;
    "
  >

    <p
      style="
        margin:0;
        font-size:17px;
        line-height:1.7;
      "
    >
      Hello
      <strong>
        ${escapeHtml(name)}
      </strong>,
    </p>

    <p
      style="
        margin:18px 0 0;
        color:#475569;
        font-size:15px;
        line-height:1.8;
      "
    >
      We have successfully received your message and your
      travel information has been sent to our Morocco travel team.
    </p>

    <!-- SUCCESS BOX -->

    <div
      style="
        margin-top:25px;
        padding:20px;
        background:#f0fdf4;
        border:1px solid #bbf7d0;
        border-radius:14px;
      "
    >

      <div
        style="
          color:#166534;
          font-size:16px;
          font-weight:bold;
        "
      >
        ✓ Your message was received successfully
      </div>

      <p
        style="
          margin:8px 0 0;
          color:#3f6212;
          font-size:14px;
          line-height:1.7;
        "
      >
        You do not need to submit the form again.
      </p>

    </div>

    <!-- WHAT HAPPENS NEXT -->

    <div
      style="
        margin-top:30px;
      "
    >

      <h2
        style="
          margin:0;
          color:#102043;
          font-size:21px;
        "
      >
        What happens next?
      </h2>

      <p
        style="
          margin:12px 0 0;
          color:#475569;
          font-size:15px;
          line-height:1.8;
        "
      >
        Our team will review your travel information and message.
      </p>

      <p
        style="
          margin:12px 0 0;
          color:#475569;
          font-size:15px;
          line-height:1.8;
        "
      >
        Please wait for our response. We will contact you using
        the email address you provided.
      </p>

    </div>

    <!-- SUMMARY -->

    <div
      style="
        margin-top:30px;
        padding:22px;
        background:#fffaf3;
        border:1px solid #fde7c7;
        border-radius:14px;
      "
    >

      <h2
        style="
          margin:0 0 20px;
          color:#102043;
          font-size:19px;
        "
      >
        Your Request Summary
      </h2>

      ${confirmationRow(
        "Travel Date",
        travelDate ||
          "Not specified"
      )}

      ${confirmationRow(
        "Travelers",
        travelers ||
          "Not specified"
      )}

      ${confirmationRow(
        "Phone / WhatsApp",
        phone ||
          "Not specified"
      )}

      ${confirmationRow(
        "Country",
        country ||
          "Not specified"
      )}

    </div>

    <!-- MESSAGE -->

    <div
      style="
        margin-top:25px;
      "
    >

      <h3
        style="
          margin:0 0 10px;
          color:#102043;
          font-size:17px;
        "
      >
        Your Message
      </h3>

      <div
        style="
          background:#f8fafc;
          padding:18px;
          border-radius:12px;
          color:#475569;
          font-size:14px;
          line-height:1.8;
        "
      >
        ${nl2br(
          message ||
            "No message provided"
        )}
      </div>

    </div>

    <!-- CONTACT ADDRESS -->

    <div
      style="
        margin-top:28px;
        padding-top:22px;
        border-top:1px solid #e2e8f0;
      "
    >

      <p
        style="
          margin:0;
          color:#64748b;
          font-size:13px;
          line-height:1.7;
        "
      >
        We will send our response to:
      </p>

      <p
        style="
          margin:5px 0 0;
          color:#102043;
          font-size:15px;
          font-weight:bold;
        "
      >
        ${escapeHtml(email)}
      </p>

    </div>

  </div>

  <!-- FOOTER -->

  <div
    style="
      background:#102043;
      padding:28px 30px;
      text-align:center;
    "
  >

    <p
      style="
        margin:0;
        color:#ffffff;
        font-size:16px;
        font-weight:bold;
      "
    >
      Moorish Tour
    </p>

    <p
      style="
        margin:7px 0 0;
        color:#94a3b8;
        font-size:12px;
        line-height:1.6;
      "
    >
      Private Morocco Tours & Custom Travel Experiences
    </p>

  </div>

</div>

</div>

</body>

</html>
    `;

    /*
    |--------------------------------------------------------------------------
    | Confirmation Payload
    |--------------------------------------------------------------------------
    */

    const confirmationPayload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },

      /*
      | Confirmation goes to the visitor.
      */

      to: [
        {
          email,
          name,
        },
      ],

      /*
      | If they reply to the confirmation,
      | the reply comes to you.
      */

      replyTo: {
        email: recipientEmail,
        name: "Moorish Tour",
      },

      subject:
        "We Received Your Message - Moorish Tour",

      textContent:
        confirmationText,

      htmlContent:
        confirmationHtml,
    };

    /*
    |--------------------------------------------------------------------------
    | Send Confirmation
    |--------------------------------------------------------------------------
    */

    // The customer notification is best-effort. A failure here must never
    // turn a successfully received main enquiry into a "message not sent" error.
    let confirmationResponse: Response | null = null;
    try {
      confirmationResponse = await fetch(
        "https://api.brevo.com/v3/smtp/email",
        {
          method: "POST",

          headers: {
            accept:
              "application/json",

            "content-type":
              "application/json",

            "api-key":
              apiKey,
          },

          body: JSON.stringify(
            confirmationPayload
          ),

          cache: "no-store",
          signal: AbortSignal.timeout(12000),
        }
      );
    } catch (confirmationTransportError) {
      console.error("BREVO confirmation delivery problem (main message already sent):", confirmationTransportError);
    }

    /*
    |--------------------------------------------------------------------------
    | Confirmation Result
    |--------------------------------------------------------------------------
    */

    let confirmationSent = false;

    let confirmationMessageId:
      | string
      | null = null;

    if (!confirmationResponse?.ok) {
      const confirmationError = confirmationResponse
        ? await confirmationResponse.text().catch(() => "Confirmation response unreadable")
        : "Confirmation request did not complete";

      console.error(
        "======================================"
      );

      console.error(
        "BREVO CONTACT CONFIRMATION ERROR"
      );

      console.error(
        "Status:",
        confirmationResponse?.status ?? "network failure"
      );

      console.error(
        "Response:",
        confirmationError
      );

      console.error(
        "======================================"
      );
    } else {
      confirmationSent = true;

      const confirmationResult = await confirmationResponse.json().catch(() => null);

      confirmationMessageId =
        confirmationResult?.messageId ||
        null;

      console.log(
        `Contact confirmation sent to ${email}`
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Final Success
    |--------------------------------------------------------------------------
    */

    return NextResponse.json(
      {
        success: true,

        message:
          "Message sent successfully. We will reply as soon as possible.",

        messageId:
          mainResult?.messageId ||
          null,

        confirmationSent,

        confirmationMessageId,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact email error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send the message.",
      },
      {
        status: 500,
      }
    );
  }
}

/*
|--------------------------------------------------------------------------
| Helper Functions
|--------------------------------------------------------------------------
*/

function escapeHtml(
  value: string
) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function nl2br(
  value: string
) {
  return escapeHtml(value).replace(
    /\r?\n/g,
    "<br />"
  );
}

function emailSectionTitle(
  title: string
) {
  return `
    <h2
      style="
        margin:0 0 16px;
        color:#102043;
        font-size:19px;
        line-height:1.4;
      "
    >
      ${escapeHtml(title)}
    </h2>
  `;
}

function emailRow(
  label: string,
  value: string
) {
  return `
    <p
      style="
        margin:0 0 11px;
        font-size:14px;
        line-height:1.7;
      "
    >
      <strong>
        ${escapeHtml(label)}:
      </strong>

      ${value}
    </p>
  `;
}

function confirmationRow(
  label: string,
  value: string
) {
  return `
    <div
      style="
        margin-bottom:14px;
      "
    >

      <div
        style="
          color:#64748b;
          font-size:11px;
          font-weight:bold;
          text-transform:uppercase;
          letter-spacing:0.6px;
        "
      >
        ${escapeHtml(label)}
      </div>

      <div
        style="
          margin-top:4px;
          color:#1e293b;
          font-size:14px;
          line-height:1.6;
        "
      >
        ${escapeHtml(value)}
      </div>

    </div>
  `;
}