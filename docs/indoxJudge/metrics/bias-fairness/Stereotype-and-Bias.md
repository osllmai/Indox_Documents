# Stereotype and Bias Metrics

This module provides metrics for evaluating stereotypes and bias in language model outputs.

## Overview

The stereotype and bias metrics help identify:
- Gender bias
- Racial bias
- Cultural stereotypes
- Age-related bias
- Socioeconomic bias

## Available Metrics

### 1. Demographic Parity Score

Measures whether the model's outputs are independent of protected attributes.

```python
from indoxJudge.metrics import DemographicParityMetric

metric = DemographicParityMetric()
score = metric.evaluate(responses, protected_attributes)
```

### 2. Stereotype Association Test

Measures implicit associations between concepts and attributes.

```python
from indoxJudge.metrics import StereotypeAssociationMetric

metric = StereotypeAssociationMetric()
score = metric.evaluate(responses, concept_pairs, attribute_pairs)
```

### 3. Representation Bias Score

Evaluates the representation of different groups in generated content.

```python
from indoxJudge.metrics import RepresentationBiasMetric

metric = RepresentationBiasMetric()
score = metric.evaluate(responses, demographic_groups)
```

## Usage Guidelines

1. Define protected attributes and groups clearly
2. Use diverse test sets
3. Consider intersectional biases
4. Document mitigation strategies 