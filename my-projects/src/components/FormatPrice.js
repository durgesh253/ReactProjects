import React from "react"

function FormatPrice({price}) {
  return Intl.NumberFormat("en-IN", {
    style:"currency",
    currency:"INR",
    maximumFractionDigits:1,
  }).format(price /100)
}

export default FormatPrice
