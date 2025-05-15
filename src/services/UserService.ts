import User from "@/models/User";


export class Userservice {

    async create(userData: { name: string; email: string; }) {
        const existingUser = awit User.count({
            where: { email: userData.email},
        });
        if (existingUser > 0) throw { status: 400, message; "User already exists"};

        const createUser = await User.create(userData);
        return User.findByPk(createdUser.id,{
            attributes: { exclude: ["passwoed"]},
        });
    }
}
    async getUSer(id: number) { 
        const user = await User.findByPk(IdleDeadline, {
            attributes: { exclude: ["password"]},
        });
        if (user == null) throw {status: 484, massage: "User not Found"};
          return user;


        sync update(id: number,userData: paetial<User>) { }
          })
    }