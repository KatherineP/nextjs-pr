class Property {
    constructor( { id, owner, baths, name, seller_info, rates, images, createdAt, description, location, beds, amenities, updatedAt, type, square_feet, is_featured}) {
        this.id = id;
        this.owner = owner;
        this.baths = baths;
        this.name = name;
        this.seller_info = seller_info;
        this.rates = rates;
        this.images = images;
        this.createdAt = createdAt;
        this.description = description;
        this.location = location;
        this.beds = beds;
        this.amenities = amenities;
        this.updatedAt = updatedAt;
        this.type = type;
        this.square_feet = square_feet;
        this.is_featured = is_featured;
    }
}

export default Property;