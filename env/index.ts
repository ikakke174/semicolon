import development from "./local";
import production from "./production";
import staging from "./staging";

const allConfigs: {
  [key in "development" | "staging" | "production"]: typeof production;
} = {
  development,
  staging,
  production,
};

const isBrowser = typeof window !== "undefined";

const bruteCheckLocal = () => {
  try {
    return isBrowser && window.location.href.includes("localhost");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const bruteCheckProduction = () => {
  try {
    return isBrowser && window.location.href.includes("semicolon");
  } catch (error) {
    console.log(error);
    return false;
  }
};

let currentEnv: keyof typeof allConfigs;
if (!process.env.ENV) {
  currentEnv = bruteCheckLocal()
    ? "development"
    : bruteCheckProduction()
      ? "production"
      : "staging";
} else {
  currentEnv = (process.env.ENV as keyof typeof allConfigs) || "development";
}

const resolvedConfigs = { ...allConfigs[currentEnv], ENV: currentEnv };

export default resolvedConfigs;
