import './App.css'
import Welcome from './pages/welcome/Welcome'

function App() {
  return(
    <div className="app">
      {/* <Home /> */}
      <Welcome />
    </div>
  )
}

export default App

// // Alex: As an AI language model, I do not have the capability to write code 
// in a specific programming language or framework. However, I can provide some
//general guidance on how you can approach building a chat application and integrating
//it with an AI-generated photo feed. 1. Choose a programming language and a chat
//framework: Depending on your skill set and preferences, you can use any 
//programming language to build a chat application. Some popular frameworks
//for building chat applications include Node.js with Socket.io, Firebase, and Pusher.
//2. Set up a database: You'll need to set up a database to store user information,
//chat messages, and other relevant data. Some popular options include MongoDB, 
//MySQL, and Postgres. 3. Integrate an AI-generated photo feed: There are various 
//AI-powered platforms that generate realistic photos, such as 
//NVIDIA's StyleGAN and DeepArt. Once you have generated the photos, you can store 
//them in a database or on a cloud storage platform like AWS S3. You can also use 
//APIs such as OpenAI's DALL-E to generate photos dynamically when users request 
//them. 4. Implement the photo feed: Once you have the photos, you'll need to implement 
//the logic for displaying them in your chat application. You can use a