import { fetchData } from "../Fetch";

export const getTerbaru = () => fetchData("terbaru");
export const getNasional = () => fetchData("nasional");
export const getInternasional = () => fetchData("internasional");
export const getOlahraga = () => fetchData("olahraga");
export const getTeknologi = () => fetchData("teknologi");
export const getHiburan = () => fetchData("hiburan");
export const getGayahidup = () => fetchData("gayahidup");
