import { NextResponse } from "next/server";

export const runtime = "nodejs";

/*
|--------------------------------------------------------------------------
| POST - Tour Planner
|--------------------------------------------------------------------------
*/

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

    const dreamTrip = String(
      formData.get("dreamTrip") || ""
    ).trim();

    /*
    |--------------------------------------------------------------------------
    | Validate Required Fields
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
    | Destinations
    |--------------------------------------------------------------------------
    */

    const destinationsRaw = String(
      formData.get("destinations") || "[]"
    );

    let destinations: string[] = [];

    try {
      const parsed = JSON.parse(destinationsRaw);

      if (Array.isArray(parsed)) {
        destinations = parsed.map((item) =>
          String(item)
        );
      }
    } catch {
      destinations = [];
    }

    /*
    |--------------------------------------------------------------------------
    | Interests
    |--------------------------------------------------------------------------
    */

    const interestsRaw = String(
      formData.get("interests") || "[]"
    );

    let interests: string[] = [];

    try {
      const parsed = JSON.parse(interestsRaw);

      if (Array.isArray(parsed)) {
        interests = parsed.map((item) =>
          String(item)
        );
      }
    } catch {
      interests = [];
    }

    /*
    |--------------------------------------------------------------------------
    | Tour Preferences
    |--------------------------------------------------------------------------
    */

    const mustSee = String(
      formData.get("mustSee") || ""
    ).trim();

    const travelStyle = String(
      formData.get("travelStyle") || ""
    ).trim();

    const accommodation = String(
      formData.get("accommodation") || ""
    ).trim();

    const tourPace = String(
      formData.get("tourPace") || ""
    ).trim();

    const specialRequests = String(
      formData.get("specialRequests") || ""
    ).trim();

    /*
    |--------------------------------------------------------------------------
    | Upload Reference Files
    |--------------------------------------------------------------------------
    */

    const uploadedFiles =
      formData.getAll("referenceFiles");

    const attachments: {
      name: string;
      content: string;
    }[] = [];

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    /*
    | Maximum 5 MB for each image.
    */

    const maxFileSize =
      5 * 1024 * 1024;

    for (const item of uploadedFiles) {
      if (!(item instanceof File)) {
        continue;
      }

      if (item.size <= 0) {
        continue;
      }

      if (item.size > maxFileSize) {
        console.warn(
          `Skipped oversized file: ${item.name}`
        );

        continue;
      }

      if (
        !allowedTypes.includes(item.type)
      ) {
        console.warn(
          `Skipped unsupported file: ${item.name}`
        );

        continue;
      }

      const arrayBuffer =
        await item.arrayBuffer();

      const base64Content =
        Buffer.from(arrayBuffer).toString(
          "base64"
        );

      attachments.push({
        name: sanitizeFilename(item.name),
        content: base64Content,
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Environment Variables
    |--------------------------------------------------------------------------
    */

    const apiKey =
      process.env.BREVO_API_KEY;

    const senderEmail =
      process.env.BREVO_SENDER_EMAIL;

    const senderName =
      process.env.BREVO_SENDER_NAME ||
      "Moorish Tour";

    const recipientEmail =
      process.env.TOUR_REQUEST_EMAIL;

    /*
    |--------------------------------------------------------------------------
    | Validate Server Configuration
    |--------------------------------------------------------------------------
    */

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
    | Email Sent to Moorish Tour - Plain Text
    |--------------------------------------------------------------------------
    */

    const textContent = `
NEW CUSTOM MOROCCO TOUR REQUEST

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


TRIP DETAILS
--------------------------------

Travel Date:
${travelDate || "Not specified"}

Number of Travelers:
${travelers || "Not specified"}

Dream Trip:
${dreamTrip || "Not specified"}


DESTINATIONS
--------------------------------

${
  destinations.length
    ? destinations.join(", ")
    : "Not specified"
}


MUST SEE PLACES
--------------------------------

${mustSee || "Not specified"}


INTERESTS & ACTIVITIES
--------------------------------

${
  interests.length
    ? interests.join(", ")
    : "Not specified"
}


TOUR PREFERENCES
--------------------------------

Travel Style:
${travelStyle || "Not specified"}

Accommodation:
${accommodation || "Not specified"}

Tour Pace:
${tourPace || "Not specified"}


SPECIAL REQUESTS
--------------------------------

${specialRequests || "None"}


REFERENCE FILES
--------------------------------

${attachments.length} attached file(s)
    `.trim();

    /*
    |--------------------------------------------------------------------------
    | Email Sent to Moorish Tour - HTML
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
  New Custom Morocco Tour Request
</h1>

<p
  style="
    margin:10px 0 0;
    color:#cbd5e1;
    font-size:14px;
    line-height:1.7;
  "
>
  A traveler submitted a new custom tour request.
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
    padding:20px;
    background:#fffaf3;
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


<div style="margin-top:30px;">

${emailSectionTitle(
  "Trip Details"
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


<div style="margin-top:22px;">

<strong
  style="
    color:#102043;
  "
>
  Dream Trip
</strong>

<div
  style="
    margin-top:10px;
    padding:18px;
    background:#f8fafc;
    border-radius:12px;
    line-height:1.8;
  "
>

${nl2br(
  dreamTrip || "Not specified"
)}

</div>

</div>


<div style="margin-top:30px;">

${emailSectionTitle(
  "Destinations & Interests"
)}

${emailRow(
  "Destinations",
  escapeHtml(
    destinations.join(", ") ||
      "Not specified"
  )
)}

<div style="margin-top:18px;">

<strong>
  Must See Places
</strong>

<div
  style="
    margin-top:8px;
    line-height:1.8;
  "
>

${nl2br(
  mustSee || "Not specified"
)}

</div>

</div>


<div style="margin-top:18px;">

<strong>
  Interests & Activities
</strong>

<div
  style="
    margin-top:8px;
    line-height:1.8;
  "
>

${escapeHtml(
  interests.join(", ") ||
    "Not specified"
)}

</div>

</div>

</div>


<div style="margin-top:30px;">

${emailSectionTitle(
  "Tour Preferences"
)}

${emailRow(
  "Travel Style",
  escapeHtml(
    travelStyle || "Not specified"
  )
)}

${emailRow(
  "Accommodation",
  escapeHtml(
    accommodation || "Not specified"
  )
)}

${emailRow(
  "Tour Pace",
  escapeHtml(
    tourPace || "Not specified"
  )
)}

</div>


<div style="margin-top:30px;">

${emailSectionTitle(
  "Special Requests"
)}

<div
  style="
    padding:18px;
    background:#f8fafc;
    border-radius:12px;
    line-height:1.8;
  "
>

${nl2br(
  specialRequests || "None"
)}

</div>

</div>


<div
  style="
    margin-top:30px;
    padding:18px;
    background:#fffaf3;
    border-radius:12px;
  "
>

<strong>
  Reference files:
</strong>

${attachments.length}

</div>

</div>


<!-- FOOTER -->

<div
  style="
    padding:20px 30px;
    background:#f8fafc;
    border-top:1px solid #e2e8f0;
    color:#64748b;
    font-size:12px;
  "
>

This request was submitted through the
Moorish Tour website.

</div>

</div>

</div>

</body>
</html>
    `;

    /*
    |--------------------------------------------------------------------------
    | Main Brevo Payload
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
      | Clicking Reply will reply
      | directly to the traveler.
      */

      replyTo: {
        email,
        name,
      },

      subject:
        `New Morocco Tour Request - ${name}`,

      textContent,

      htmlContent,

      ...(attachments.length > 0
        ? {
            attachment: attachments,
          }
        : {}),
    };

    /*
    |--------------------------------------------------------------------------
    | Send Main Request to Moorish Tour
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
      }
    );

    /*
    |--------------------------------------------------------------------------
    | Main Email Failed
    |--------------------------------------------------------------------------
    */

    if (!brevoResponse.ok) {
      const brevoError =
        await brevoResponse.text();

      console.error(
        "======================================"
      );

      console.error(
        "BREVO TOUR REQUEST ERROR"
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
            "Unable to send the tour request.",
        },
        {
          status: 502,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Main Request Successfully Sent
    |--------------------------------------------------------------------------
    */

    const mainResult =
      await brevoResponse.json();

    /*
    |--------------------------------------------------------------------------
    | Traveler Confirmation - Plain Text
    |--------------------------------------------------------------------------
    */

    const confirmationText = `
Hello ${name},

Thank you for contacting Moorish Tour.

We have successfully received your Morocco tour request.

Our travel team will now review the information you provided, including your travel dates, destinations, interests, accommodation preferences, and special requests.

Please wait for our response. Our team will contact you using this email address:

${email}


YOUR REQUEST SUMMARY
--------------------------------

Travel Date:
${travelDate || "Not specified"}

Number of Travelers:
${travelers || "Not specified"}

Destinations:
${
  destinations.length
    ? destinations.join(", ")
    : "Not specified"
}

Travel Style:
${travelStyle || "Not specified"}

Accommodation:
${accommodation || "Not specified"}

Tour Pace:
${tourPace || "Not specified"}


You do not need to submit the form again.

Thank you for choosing Moorish Tour.

Moorish Tour
Private Morocco Tours & Custom Travel Experiences
    `.trim();

    /*
    |--------------------------------------------------------------------------
    | Traveler Confirmation - HTML
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

We Received Your Morocco Tour Request

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

Thank you for sharing your Morocco
travel plans with us.

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

We have successfully received your
custom Morocco tour request.

Your information has been sent to
our travel team.

</p>


<!-- SUCCESS -->

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

✓ Your request was received successfully

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


<!-- NEXT STEP -->

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

Our Morocco travel team will review
your travel dates, destinations,
interests, preferred accommodation
and any special requests.

</p>


<p
  style="
    margin:12px 0 0;
    color:#475569;
    font-size:15px;
    line-height:1.8;
  "
>

Please wait for our response.

We will contact you using the email
address you provided.

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
  travelDate || "Not specified"
)}


${confirmationRow(
  "Travelers",
  travelers || "Not specified"
)}


${confirmationRow(
  "Destinations",
  destinations.join(", ") ||
    "Not specified"
)}


${confirmationRow(
  "Travel Style",
  travelStyle || "Not specified"
)}


${confirmationRow(
  "Accommodation",
  accommodation || "Not specified"
)}


${confirmationRow(
  "Tour Pace",
  tourPace || "Not specified"
)}

</div>


<!-- CONTACT EMAIL -->

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

Private Morocco Tours &
Custom Travel Experiences

</p>

</div>

</div>

</div>

</body>

</html>
    `;

    /*
    |--------------------------------------------------------------------------
    | Traveler Confirmation Payload
    |--------------------------------------------------------------------------
    */

    const confirmationPayload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },

      /*
      | Confirmation goes to traveler.
      */

      to: [
        {
          email,
          name,
        },
      ],

      /*
      | If traveler clicks Reply,
      | reply goes to Moorish Tour.
      */

      replyTo: {
        email: recipientEmail,
        name: "Moorish Tour",
      },

      subject:
        "We Received Your Morocco Tour Request - Moorish Tour",

      textContent:
        confirmationText,

      htmlContent:
        confirmationHtml,
    };

    /*
    |--------------------------------------------------------------------------
    | Send Confirmation to Traveler
    |--------------------------------------------------------------------------
    */

    const confirmationResponse =
      await fetch(
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
        }
      );

    /*
    |--------------------------------------------------------------------------
    | Confirmation Result
    |--------------------------------------------------------------------------
    |
    | IMPORTANT:
    |
    | If this email fails, the original request was already
    | successfully received by Moorish Tour.
    |
    | Therefore we still return success to the traveler.
    |
    */

    let confirmationSent = false;

    let confirmationMessageId:
      | string
      | null = null;

    if (!confirmationResponse.ok) {
      const confirmationError =
        await confirmationResponse.text();

      console.error(
        "======================================"
      );

      console.error(
        "BREVO CONFIRMATION EMAIL ERROR"
      );

      console.error(
        "Status:",
        confirmationResponse.status
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

      const confirmationResult =
        await confirmationResponse.json();

      confirmationMessageId =
        confirmationResult?.messageId ||
        null;

      console.log(
        `Confirmation email sent successfully to ${email}`
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Success Response
    |--------------------------------------------------------------------------
    */

    return NextResponse.json(
      {
        success: true,

        message:
          "Your Morocco tour request has been sent successfully.",

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
    /*
    |--------------------------------------------------------------------------
    | Unexpected Error
    |--------------------------------------------------------------------------
    */

    console.error(
      "Tour planner API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Unable to send the tour request. Please try again.",
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

/*
|--------------------------------------------------------------------------
| Escape HTML
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

/*
|--------------------------------------------------------------------------
| Convert New Lines to <br />
|--------------------------------------------------------------------------
*/

function nl2br(
  value: string
) {
  return escapeHtml(value).replace(
    /\r?\n/g,
    "<br />"
  );
}

/*
|--------------------------------------------------------------------------
| Clean Attachment Filename
|--------------------------------------------------------------------------
*/

function sanitizeFilename(
  filename: string
) {
  return filename.replace(
    /[^a-zA-Z0-9._-]/g,
    "_"
  );
}

/*
|--------------------------------------------------------------------------
| Email Section Heading
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Admin Email Row
|--------------------------------------------------------------------------
*/

function emailRow(
  label: string,
  value: string
) {
  return `
    <p
      style="
        margin:0 0 11px;
        line-height:1.7;
        font-size:14px;
      "
    >
      <strong>
        ${escapeHtml(label)}:
      </strong>

      ${value}
    </p>
  `;
}

/*
|--------------------------------------------------------------------------
| Traveler Confirmation Row
|--------------------------------------------------------------------------
*/

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