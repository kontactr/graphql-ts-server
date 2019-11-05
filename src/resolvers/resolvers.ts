import "../types/schema";
import { ResolverMap } from "../types/graphqlTypesUtils";

import * as bcrypt from "bcrypt";
import { Users } from "../entity/Users";

const resolvers: ResolverMap = {
  Query: {
    hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `hello ${name}`
  },
  Mutation: {

    register: async (
      _: any,
      { email, password }: GQL.IRegisterOnMutationArguments
    ) => {

      const passwordSalt = parseInt(process.env.PASSWORD_SALT || "0", 10) || 2;

      const hashedPassword = await bcrypt.hash(password, passwordSalt);

      const user = Users.create({
        email,
        password: hashedPassword
      });

      await user.save();
      return true;
    }
  }
};

export default resolvers;
