# Use an official Maven image to build the app
FROM maven:3.8.7-openjdk-17 AS build

# Set the working directory
WORKDIR /app

# Copy pom.xml and install dependencies (caching)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the project and build
COPY . .
RUN mvn clean package -DskipTests

# Use a smaller image for running the app
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy built JAR from the build image
COPY --from=build /app/target/*.jar app.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]