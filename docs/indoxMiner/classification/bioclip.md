# BioClip

BioClip is a specialized CLIP model variant trained on biomedical images and text, designed for healthcare and life sciences applications.

## Applications

- Medical image classification
- Pathology analysis
- Cell type identification
- Biomedical document understanding

## Usage Example

```python
from indoxMiner.classification import BioClipClassifier

# Initialize the classifier
classifier = BioClipClassifier(
    model_name="microsoft/bioclip-base",
    device="cuda"
)

# Classify medical images
result = classifier.classify(
    image_path="path/to/medical_image.jpg",
    categories=[
        "normal tissue",
        "malignant tumor",
        "benign tumor"
    ]
)

print(f"Classification: {result.label}")
print(f"Confidence: {result.confidence}")
```

## Model Variants

- bioclip-base: General purpose biomedical model
- bioclip-pathology: Specialized for pathology
- bioclip-microscopy: Optimized for microscopy images

## Configuration

- `model_name`: Model variant selection
- `confidence_threshold`: Minimum confidence for predictions
- `device`: Computing device (cuda/cpu)
- `batch_size`: Batch processing size 