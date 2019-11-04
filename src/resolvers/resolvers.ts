import "../types/schema";
import { ResolverMap } from "../types/graphqlTypesUtils";

const resolvers: ResolverMap = {
  Query: {
    hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `hello ${name}`
  },
  Mutation: {
    register: (
      _: any,
      { email, password }: GQL.IRegisterOnMutationArguments
    ) => {
      return email + " " + password;
    }
  }
};

export default resolvers;
