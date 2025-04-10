# 🧱 Stage 1: Build the application
FROM maven:3.8-openjdk-17 AS builder

WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code
COPY src ./src

# Build the app (skip tests)
RUN mvn clean package -DskipTests

# 📦 Stage 2: Run the built jar
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the jar from the builder
COPY --from=builder /app/target/*.jar app.jar

# Run the application
CMD ["java", "-jar", "app.jar"]