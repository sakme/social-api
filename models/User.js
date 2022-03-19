const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'A username is required.',
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: 'An email address is required.',
            unique: true,
            match: /.+\@.+\..+/
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        friends: [],
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
});

const User = model('User', UserSchema);

module.exports = User;