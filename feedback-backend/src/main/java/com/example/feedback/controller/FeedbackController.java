
package com.example.feedback.controller;

import com.example.feedback.model.Feedback;
import com.example.feedback.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    @Autowired
    private FeedbackRepository repository;

    @PostMapping
    public ResponseEntity<String> submitFeedback(@RequestParam Map<String, String> params,
                                                 @RequestParam(required = false) MultipartFile screenshot) throws IOException {

        Feedback feedback = new Feedback();
        feedback.setName(Boolean.parseBoolean(params.get("anonymous")) ? "Anonymous" : params.get("name"));
        feedback.setEmail(Boolean.parseBoolean(params.get("anonymous")) ? "N/A" : params.get("email"));
        feedback.setMessage(params.get("message"));
        feedback.setRating(params.get("rating") != null ? Integer.parseInt(params.get("rating")) : null);
//        feedback.setCategory(params.get("category"));
//        feedback.setRecommend(Boolean.parseBoolean(params.get("recommend")));
        feedback.setAnonymous(Boolean.parseBoolean(params.get("anonymous")));
        feedback.setTags(params.get("tags"));
//        feedback.setDateOfExperience(params.get("dateOfExperience") != null ?
//                LocalDate.parse(params.get("dateOfExperience")) : null);
        feedback.setSubmittedAt(LocalDateTime.now());

        if (screenshot != null && !screenshot.isEmpty()) {
            String filename = UUID.randomUUID() + "_" + screenshot.getOriginalFilename();
            Path path = Paths.get("uploads/" + filename);
            Files.createDirectories(path.getParent());
            Files.write(path, screenshot.getBytes());
            feedback.setScreenshotPath(path.toString());
        }

        repository.save(feedback);
        return ResponseEntity.ok("Feedback submitted successfully.");
    }


    @GetMapping
    public List<Feedback> getAllFeedback() {
        return repository.findAll();
    }
	
}
