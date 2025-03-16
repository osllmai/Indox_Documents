# AltClip

AltClip is an alternative implementation of the CLIP model with modifications for improved performance and flexibility.

## Features

- Enhanced training stability
- Improved zero-shot performance
- Flexible architecture modifications
- Custom prompt engineering

## Basic Usage

```python
from indoxMiner.classification import AltClipClassifier

# Initialize the model
classifier = AltClipClassifier(
    model_name="alt/clip-base",
    device="cuda"
)

# Classify with custom prompts
result = classifier.classify_with_prompts(
    image="example.jpg",
    prompts=[
        "a photograph of {}",
        "an image of {}",
        "a picture showing {}"
    ],
    categories=["dog", "cat", "bird"]
)

print(f"Classification: {result.label}")
print(f"Confidence: {result.confidence}")
```

## Advanced Configuration

```python
classifier = AltClipClassifier(
    model_name="alt/clip-base",
    temperature=0.7,
    prompt_template="a high quality photo of {}",
    batch_size=32,
    device="cuda"
)
```

## Parameters

- `model_name`: Model variant to use
- `temperature`: Softmax temperature
- `prompt_template`: Custom prompt format
- `batch_size`: Processing batch size
- `device`: Computing device 