const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db('washing_machine_shop');
const productsCollection = db.collection('products');
const bookingsCollection = db.collection('bookings');
const testimonialsCollection = db.collection('testimonials');
const blogPostsCollection = db.collection('blog_posts');

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

async function getProducts() {
  try {
    const products = await productsCollection.find({}).toArray();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function createBooking(bookingData) {
  try {
    const result = await bookingsCollection.insertOne(bookingData);
    return result.insertedId;
  } catch (error) {
    console.error('Error creating booking:', error);
    return null;
  }
}

async function getTestimonials() {
  try {
    const testimonials = await testimonialsCollection.find({}).toArray();
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

async function getBlogPosts() {
  try {
    const blogPosts = await blogPostsCollection.find({}).toArray();
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

async function createContactMessage(messageData) {
  try {
    const result = await db.collection('contact_messages').insertOne(messageData);
    return result.insertedId;
  } catch (error) {
    console.error('Error creating contact message:', error);
    return null;
  }
}

module.exports = {
  connectToDatabase,
  getProducts,
  createBooking,
  getTestimonials,
  getBlogPosts,
  createContactMessage,
};