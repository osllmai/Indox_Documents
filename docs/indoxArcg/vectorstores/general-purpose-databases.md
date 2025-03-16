# General Purpose Vector Databases

This guide covers general-purpose vector databases supported by indoxArcg for storing and querying vector embeddings.

## Supported Databases

### 1. PostgreSQL with pgvector

PostgreSQL with the pgvector extension provides efficient vector similarity search.

```python
from indoxArcg.vectorstores import PostgresVectorStore

store = PostgresVectorStore(
    connection_string="postgresql://user:pass@localhost:5432/db",
    table_name="embeddings",
    dimension=1536
)
```

### 2. SQLite with sqlite-vss

SQLite with vector similarity search extension for lightweight deployments.

```python
from indoxArcg.vectorstores import SQLiteVectorStore

store = SQLiteVectorStore(
    db_path="vectors.db",
    table_name="embeddings"
)
```

### 3. MongoDB Atlas

MongoDB Atlas with vector search capabilities.

```python
from indoxArcg.vectorstores import MongoDBVectorStore

store = MongoDBVectorStore(
    connection_string="mongodb+srv://...",
    database="vectors",
    collection="embeddings"
)
```

## Common Operations

```python
# Add vectors
store.add_vectors(vectors, metadata)

# Search
results = store.search(query_vector, top_k=5)

# Delete
store.delete(ids=["doc1", "doc2"])

# Update
store.update(id="doc1", vector=new_vector, metadata=new_metadata)
```

## Performance Considerations

- Index types and configuration
- Batch operations
- Query optimization
- Connection pooling 