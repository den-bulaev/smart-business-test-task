export  const transformPair = (pair: string) => {
  const preparedPair = pair.toUpperCase();
  const isUSDT = preparedPair.includes("USDT");

  if (!preparedPair.includes("USDT") && !preparedPair.includes("USDC")) {
    return preparedPair;
  }

  if (isUSDT) {
    return preparedPair.startsWith("USDT")
      ? preparedPair.split("USDT").join("USDT-")
      : preparedPair.split("USDT").join("-USDT");
  }

  return preparedPair.startsWith("USDC")
    ? preparedPair.split("USDC").join("USDC-")
    : preparedPair.split("USDC").join("-USDC");
};
