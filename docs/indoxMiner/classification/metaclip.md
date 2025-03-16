# MetaCLIP

MetaCLIP extends the CLIP model with meta-learning capabilities for improved few-shot learning and domain adaptation.

## Key Features

- Meta-learning for quick adaptation
- Improved few-shot performance
- Cross-domain generalization
- Efficient fine-tuning

## Implementation

```python
from indoxMiner.classification import MetaCLIPClassifier

# Initialize the classifier
classifier = MetaCLIPClassifier(
    model_name="meta/clip-base-patch32",
    device="cuda"
)

# Fine-tune on a few examples
classifier.meta_learn(
    support_images=["img1.jpg", "img2.jpg"],
    support_labels=["class1", "class2"],
    num_adaptation_steps=5
)

# Classify new images
result = classifier.predict("new_image.jpg")
print(f"Predicted class: {result.label}")
```

## Configuration Options

- `model_name`: Base model to use
- `learning_rate`: Meta-learning rate
- `adaptation_steps`: Number of adaptation steps
- `meta_batch_size`: Batch size for meta-learning 