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
    | Shared Contact Information
    |--------------------------------------------------------------------------
    */

    const name = String(
      formData.get("name") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const subject = String(
      formData.get("subject") || ""
    ).trim();

    const message = String(
      formData.get("message") || ""
    ).trim();

    /*
    |--------------------------------------------------------------------------
    | Booking Information
    |--------------------------------------------------------------------------
    */

    const phone = String(
      formData.get("phone") || ""
    ).trim();

    const travelDate = String(
      formData.get("travelDate") || ""
    ).trim();

    const guests = String(
      formData.get("guests") || ""
    ).trim();

    const pickupCity = String(
      formData.get("pickupCity") || ""
    ).trim();

    const accommodation = String(
      formData.get("accommodation") || ""
    ).trim();

    const startPrice = String(
      formData.get("startPrice") || ""
    ).trim();

    const currency = String(
      formData.get("currency") || "€"
    ).trim();

    const priceUnit = String(
      formData.get("priceUnit") || "per person"
    ).trim();

    const tourName = String(
      formData.get("tourName") || ""
    ).trim();

    /*
    |--------------------------------------------------------------------------
    | Form Type
    |--------------------------------------------------------------------------
    |
    | Existing contact forms continue working.
    | Booking forms are detected automatically.
    |
    */

    const requestedFormType = String(
      formData.get("formType") || ""
    ).trim();

    const isBooking =
      requestedFormType === "booking" ||
      Boolean(
        travelDate ||
          guests ||
          pickupCity ||
          accommodation ||
          startPrice
      );

    /*
    |--------------------------------------------------------------------------
    | Validation
    |--------------------------------------------------------------------------
    */

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name and email are required.",
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
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Booking Validation
    |--------------------------------------------------------------------------
    */

    if (isBooking) {
      if (!travelDate || !guests) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Travel date and number of guests are required.",
          },
          {
            status: 400,
          }
        );
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Normal Contact Form Validation
    |--------------------------------------------------------------------------
    */

    if (!isBooking && !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Message is required.",
        },
        {
          status: 400,
        }
      );
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

    if (
      !apiKey ||
      !senderEmail ||
      !recipientEmail
    ) {
      console.error(
        "Missing Brevo environment variables:",
        {
          hasApiKey:
            Boolean(apiKey),

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
    | Starting Price
    |--------------------------------------------------------------------------
    */

    const formattedPrice =
      startPrice
        ? `${currency}${startPrice} ${priceUnit}`
        : "Not specified";

    /*
    |--------------------------------------------------------------------------
    | Main Email - Plain Text
    |--------------------------------------------------------------------------
    */

    const textContent = isBooking
      ? `
NEW MOROCCO TOUR BOOKING REQUEST

CONTACT DETAILS
--------------------------------

Name:
${name}

Email:
${email}

Phone / WhatsApp:
${phone || "Not specified"}


BOOKING DETAILS
--------------------------------

Tour:
${tourName || "Not specified"}

Travel Date:
${travelDate || "Not specified"}

Number of Guests:
${guests || "Not specified"}

Starting City:
${pickupCity || "Not specified"}

Accommodation:
${accommodation || "No preference"}

Starting Price:
${formattedPrice}


ADDITIONAL INFORMATION
--------------------------------

${message || "No additional information provided."}


IMPORTANT
--------------------------------

The displayed price is a starting price.
Final price depends on travel dates,
group size, accommodation and selected options.
      `.trim()
      : `
MOROCCO TOUR MESSAGE FROM CLIENT

CONTACT DETAILS
--------------------------------

Name:
${name}

Email:
${email}

Subject:
${subject || "No subject"}


CLIENT MESSAGE
--------------------------------

${message}
      `.trim();

    /*
    |--------------------------------------------------------------------------
    | Main Email - HTML
    |--------------------------------------------------------------------------
    */

    const htmlContent = isBooking
      ? `
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
      New Tour Booking Request
    </h1>

    <p
      style="
        margin:10px 0 0;
        color:#cbd5e1;
        font-size:14px;
        line-height:1.7;
      "
    >
      A traveler requested availability for a Morocco tour.
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

    </div>

    <!-- BOOKING -->

    <div
      style="
        margin-top:30px;
      "
    >

      ${emailSectionTitle(
        "Booking Details"
      )}

      ${
        tourName
          ? emailRow(
              "Tour",
              escapeHtml(tourName)
            )
          : ""
      }

      ${emailRow(
        "Travel Date",
        escapeHtml(
          travelDate || "Not specified"
        )
      )}

      ${emailRow(
        "Number of Guests",
        escapeHtml(
          guests || "Not specified"
        )
      )}

      ${emailRow(
        "Starting City",
        escapeHtml(
          pickupCity || "Not specified"
        )
      )}

      ${emailRow(
        "Accommodation",
        escapeHtml(
          accommodation ||
            "No preference"
        )
      )}

    </div>

    <!-- PRICE -->

    <div
      style="
        margin-top:25px;
        padding:20px;
        background:#fffaf3;
        border:1px solid #fde7c7;
        border-radius:14px;
      "
    >

      <p
        style="
          margin:0;
          color:#64748b;
          font-size:12px;
          font-weight:bold;
          text-transform:uppercase;
          letter-spacing:0.7px;
        "
      >
        Starting Price
      </p>

      <p
        style="
          margin:5px 0 0;
          color:#ea7600;
          font-size:28px;
          font-weight:bold;
        "
      >
        ${
          startPrice
            ? `${escapeHtml(
                currency
              )}${escapeHtml(
                startPrice
              )}`
            : "Not specified"
        }
      </p>

      ${
        startPrice
          ? `
            <p
              style="
                margin:3px 0 0;
                color:#64748b;
                font-size:13px;
              "
            >
              ${escapeHtml(priceUnit)}
            </p>
          `
          : ""
      }

      <p
        style="
          margin:12px 0 0;
          color:#64748b;
          font-size:12px;
          line-height:1.6;
        "
      >
        Final price depends on travel dates,
        number of guests, accommodation and
        selected tour options.
      </p>

    </div>

    <!-- MESSAGE -->

    <div
      style="
        margin-top:30px;
      "
    >

      ${emailSectionTitle(
        "Additional Information"
      )}

      <div
        style="
          background:#f8fafc;
          padding:20px;
          border-radius:12px;
          color:#475569;
          line-height:1.8;
        "
      >
        ${nl2br(
          message ||
            "No additional information provided."
        )}
      </div>

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
    This booking request was sent through the
    Moorish Tour website.
  </div>

</div>

</div>

</body>

</html>
      `
      : `
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
      New Contact Message
    </h1>

  </div>

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
        "Subject",
        escapeHtml(
          subject || "No subject"
        )
      )}

    </div>

    <div
      style="
        margin-top:30px;
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
          color:#475569;
          line-height:1.8;
        "
      >
        ${nl2br(message)}
      </div>

    </div>

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
      | Clicking Reply replies directly
      | to the customer.
      */

      replyTo: {
        email,
        name,
      },

      subject: isBooking
        ? `New Booking Request${
            tourName
              ? ` - ${tourName}`
              : ` - ${name}`
          }`
        : `New Morocco Tour Contact - ${
            subject || name
          }`,

      textContent,

      htmlContent,
    };

    /*
    |--------------------------------------------------------------------------
    | Send Main Email Through Brevo
    |--------------------------------------------------------------------------
    */

    const brevoResponse = await fetch(
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
          mainEmailPayload
        ),

        cache: "no-store",
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
        isBooking
          ? "BREVO BOOKING EMAIL ERROR"
          : "BREVO CONTACT EMAIL ERROR"
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

          message: isBooking
            ? "Unable to send the booking request."
            : "Unable to send the message.",
        },
        {
          status: 502,
        }
      );
    }

    const mainResult =
      await brevoResponse.json();

    /*
    |--------------------------------------------------------------------------
    | Customer Confirmation - Plain Text
    |--------------------------------------------------------------------------
    */

    const confirmationText = isBooking
      ? `
Hello ${name},

Thank you for contacting Moorish Tour.

We have successfully received your booking request.

Our Morocco travel team will now check availability and review your travel details.

YOUR BOOKING REQUEST
--------------------------------

${tourName ? `Tour:\n${tourName}\n` : ""}

Travel Date:
${travelDate}

Number of Guests:
${guests}

Starting City:
${pickupCity || "Not specified"}

Accommodation:
${accommodation || "No preference"}

Starting Price:
${formattedPrice}


Please note that the displayed price is a starting price.

The final price may depend on your travel dates,
number of travelers, accommodation and selected options.

Please wait for our response.

Our team will contact you using:

${email}

You do not need to send another booking request.

Thank you for choosing Moorish Tour.

Moorish Tour
Private Morocco Tours & Custom Travel Experiences
      `.trim()
      : `
Hello ${name},

Thank you for contacting Moorish Tour.

We have successfully received your message.

Our travel team will review your request and reply to:

${email}

Please wait for our response.

You do not need to submit the form again.


YOUR MESSAGE SUMMARY
--------------------------------

Subject:
${subject || "No subject"}

Message:
${message}


Thank you for contacting Moorish Tour.

Moorish Tour
Private Morocco Tours & Custom Travel Experiences
      `.trim();

    /*
    |--------------------------------------------------------------------------
    | Customer Confirmation - HTML
    |--------------------------------------------------------------------------
    */

    const confirmationHtml = isBooking
      ? `
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
      We Received Your Booking Request
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
      Thank you for choosing Moorish Tour.
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
      booking request. Our team will check
      availability and review your travel
      information.
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
        ✓ Booking request received successfully
      </div>

      <p
        style="
          margin:8px 0 0;
          color:#3f6212;
          font-size:14px;
          line-height:1.7;
        "
      >
        You do not need to submit the booking form again.
      </p>

    </div>

    <!-- BOOKING SUMMARY -->

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
        Your Booking Request
      </h2>

      ${
        tourName
          ? confirmationRow(
              "Tour",
              tourName
            )
          : ""
      }

      ${confirmationRow(
        "Travel Date",
        travelDate
      )}

      ${confirmationRow(
        "Guests",
        guests
      )}

      ${confirmationRow(
        "Starting City",
        pickupCity ||
          "Not specified"
      )}

      ${confirmationRow(
        "Accommodation",
        accommodation ||
          "No preference"
      )}

      <!-- PRICE -->

      <div
        style="
          margin-top:20px;
          padding-top:18px;
          border-top:1px solid #fde7c7;
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
          Starting Price
        </div>

        <div
          style="
            margin-top:5px;
            color:#ea7600;
            font-size:26px;
            font-weight:bold;
          "
        >
          ${
            startPrice
              ? `${escapeHtml(
                  currency
                )}${escapeHtml(
                  startPrice
                )}`
              : "Not specified"
          }
        </div>

        ${
          startPrice
            ? `
              <div
                style="
                  margin-top:3px;
                  color:#64748b;
                  font-size:12px;
                "
              >
                ${escapeHtml(
                  priceUnit
                )}
              </div>
            `
            : ""
        }

      </div>

    </div>

    <!-- MESSAGE -->

    ${
      message
        ? `
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
              Additional Information
            </h3>

            <div
              style="
                padding:18px;
                background:#f8fafc;
                border-radius:12px;
                color:#475569;
                font-size:14px;
                line-height:1.8;
              "
            >
              ${nl2br(message)}
            </div>

          </div>
        `
        : ""
    }

    <!-- NEXT -->

    <div
      style="
        margin-top:30px;
      "
    >

      <h2
        style="
          margin:0;
          color:#102043;
          font-size:20px;
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
        Our team will check availability and
        prepare the final price based on your
        travel dates, number of guests,
        accommodation and selected options.
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

    <!-- EMAIL -->

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
      `
      : `
<!DOCTYPE html>

<html>

<head>
  <meta charset="UTF-8" />
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
    max-width:650px;
    margin:35px auto;
    background:#ffffff;
    border:1px solid #e2e8f0;
    border-radius:20px;
    overflow:hidden;
  "
>

  <div
    style="
      background:#102043;
      padding:38px 30px;
      text-align:center;
    "
  >

    <h1
      style="
        margin:0;
        color:#ffffff;
        font-size:28px;
      "
    >
      We Received Your Message
    </h1>

  </div>

  <div
    style="
      padding:32px 30px;
    "
  >

    <p>
      Hello
      <strong>
        ${escapeHtml(name)}
      </strong>,
    </p>

    <p
      style="
        color:#475569;
        line-height:1.8;
      "
    >
      We have successfully received your
      message. Our team will review it and
      contact you as soon as possible.
    </p>

    <div
      style="
        margin-top:25px;
        padding:20px;
        background:#f0fdf4;
        border:1px solid #bbf7d0;
        border-radius:14px;
        color:#166534;
        font-weight:bold;
      "
    >
      ✓ Your message was received successfully
    </div>

    <div
      style="
        margin-top:30px;
        padding:22px;
        background:#fffaf3;
        border-radius:14px;
      "
    >

      ${confirmationRow(
        "Subject",
        subject || "No subject"
      )}

      <div
        style="
          margin-top:15px;
          color:#475569;
          line-height:1.8;
        "
      >
        ${nl2br(message)}
      </div>

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

      to: [
        {
          email,
          name,
        },
      ],

      replyTo: {
        email: recipientEmail,
        name: "Moorish Tour",
      },

      subject: isBooking
        ? "We Received Your Booking Request - Moorish Tour"
        : "We Received Your Message - Moorish Tour",

      textContent:
        confirmationText,

      htmlContent:
        confirmationHtml,
    };

    /*
    |--------------------------------------------------------------------------
    | Send Customer Confirmation
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
        isBooking
          ? "BREVO BOOKING CONFIRMATION ERROR"
          : "BREVO CONTACT CONFIRMATION ERROR"
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
    }

    /*
    |--------------------------------------------------------------------------
    | Success
    |--------------------------------------------------------------------------
    */

    return NextResponse.json(
      {
        success: true,

        type:
          isBooking
            ? "booking"
            : "contact",

        message: isBooking
          ? "Booking request sent successfully. We will contact you after checking availability."
          : "Message sent successfully. We will reply as soon as possible.",

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
      "Contact / booking email error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your request.",
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