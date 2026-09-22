"use strict";

try {
  texto = "ola"
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Declare a várivel!")
  }
}