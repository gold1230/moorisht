export type DeviceInfo = {
  device: string;
  browser: string;
  os: string;
};

export function getDeviceInfo(
  userAgent: string
): DeviceInfo {
  const ua = userAgent.toLowerCase();

  let device = "Desktop";

  if (/ipad|tablet/.test(ua)) {
    device = "Tablet";
  } else if (/mobile|iphone|android/.test(ua)) {
    device = "Mobile";
  }

  let browser = "Unknown";

  if (ua.includes("edg/")) {
    browser = "Microsoft Edge";
  } else if (
    ua.includes("opr/") ||
    ua.includes("opera")
  ) {
    browser = "Opera";
  } else if (
    ua.includes("chrome/") &&
    !ua.includes("edg/")
  ) {
    browser = "Chrome";
  } else if (
    ua.includes("safari/") &&
    !ua.includes("chrome/")
  ) {
    browser = "Safari";
  } else if (ua.includes("firefox/")) {
    browser = "Firefox";
  }

  let os = "Unknown";

  if (ua.includes("windows")) {
    os = "Windows";
  } else if (
    ua.includes("iphone") ||
    ua.includes("ipad")
  ) {
    os = "iOS";
  } else if (ua.includes("android")) {
    os = "Android";
  } else if (ua.includes("mac os")) {
    os = "macOS";
  } else if (ua.includes("linux")) {
    os = "Linux";
  }

  return {
    device,
    browser,
    os,
  };
}