/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User2 & Document;

@Schema()
export class User2 extends Document {
    @Prop()
    userName : string;

    @Prop()
    userEmailId : string;
}

export const UserSchema = SchemaFactory.createForClass(User2);

