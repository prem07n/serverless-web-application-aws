# AWS Serverless Web Application

This project is a complete Serverless Web App built using:

- **AWS S3** → Frontend hosting  
- **AWS API Gateway** → API endpoint  
- **AWS Lambda** → Backend logic  
- **DynamoDB** → NoSQL storage  

---

## Deployment Steps

### 1. Create DynamoDB Table
- Table name: `ServerlessTable`
- Partition key: `id` (String)

### 2. Create Lambda Function
- Use Python or Node.js code provided.
- Add IAM permission to access DynamoDB.

### 3. Create API Gateway
- Create **HTTP API**
- Integrate with Lambda
- Enable CORS
- Deploy → copy API URL

### 4. Update Frontend
- Replace `YOUR_API_GATEWAY_URL` inside `script.js`

### 5. Host on S3
- Create S3 bucket → disable block public access
- Enable static website hosting
- Upload `index.html`, `script.js`, `style.css`
- Open S3 website URL

---

## Result
A fully working, secure, scalable **Serverless Web App** using AWS.
