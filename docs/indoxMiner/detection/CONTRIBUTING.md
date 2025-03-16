# Contributing to indoxMiner Detection

We welcome contributions to the indoxMiner detection module! This guide will help you get started.

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/osllm/indoxminer.git
cd indoxminer
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
```

3. Install development dependencies:
```bash
pip install -e ".[dev]"
```

## Code Style

- Follow PEP 8 guidelines
- Use type hints
- Write docstrings in Google format
- Keep functions focused and modular

## Testing

```bash
# Run all tests
pytest tests/

# Run specific test file
pytest tests/test_detection.py

# Run with coverage
pytest --cov=indoxminer tests/
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Update documentation
6. Submit a pull request

## Code Review

All submissions require review. We use GitHub pull requests for this purpose.

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License. 