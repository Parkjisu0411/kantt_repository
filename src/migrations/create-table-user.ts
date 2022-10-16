import { User } from "../models/user";

const create_table_user = async() => {
    await User.sync({force : true})
    .then(() => {
        console.log("✅Success Create Table ==> User");
    })
    .catch((err: Error) => {
        console.log("❗️Error in Create Table ==> User :", err);
    })
}

create_table_user();