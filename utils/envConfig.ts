//export const BASE_URL="https://saucedemo.com/";
//to tun command use $env:ENC="qa"; npx playwright test
const ENV_URL={
    dev:"https://saucedemo.com/",
    qa:"https://saucedemo.com/",
    stage:"https://saucedemo.com/",
    prod:"https://saucedemo.com/"
}

const ENV=process.env.ENV_URL || "prod";
export const BASE_URL=(ENV_URL as any)[ENV];

export const USERNAME="standard_user";
export const PASSWORD="secret_sauce";