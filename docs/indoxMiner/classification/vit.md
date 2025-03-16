# Vision Transformer (ViT) Model

The Vision Transformer (ViT) is a powerful image classification model that applies the transformer architecture to computer vision tasks.

## Overview

Vision Transformers work by:
1. Splitting images into patches
2. Linearly embedding the patches
3. Adding position embeddings
4. Processing through transformer encoder blocks

## Usage

```python
from indoxMiner.classification import ViTClassifier

# Initialize the model
classifier = ViTClassifier(
    model_name="google/vit-base-patch16-224",
    device="cuda"  # or "cpu"
)

# Classify an image
result = classifier.predict("path/to/image.jpg")
print(result.label, result.confidence)
```

## Available Models

- vit-base-patch16-224
- vit-large-patch16-224
- vit-huge-patch14-224

## Configuration Options

- `model_name`: Name of the pretrained model to use
- `device`: Computing device ("cuda" or "cpu")
- `batch_size`: Batch size for inference
- `num_labels`: Number of output classes 