export const getDriveViewLink = (url, exportType = "view") => {
  const match = url.match(/\/d\/(.*?)\//);
  const fileId = match ? match[1] : null;
  return `https://drive.google.com/uc?export=${exportType}&id=${fileId}`;
};
// https://drive.google.com/uc?export=download&id=1w6eyNNYD7_tl4vDgV_mJpnOB_Mt8S5Cj