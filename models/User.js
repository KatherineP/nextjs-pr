class User {
    constructor(id, username, email, image, bookmarks, timestamps) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.image = image;
        this.bookmarks = bookmarks;
        this.timestamps = timestamps;
    }

    validate() {
        if (!this.email) {
            throw new Error('Email is required');
        }
    }

    toFirestore() {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            image: this.image,
            bookmark: this.bookmarks,
            timestamps: this.timestamps,
        };
    }
}

export default User;