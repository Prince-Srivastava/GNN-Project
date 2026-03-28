import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">Graph Neural Networks</h1>
        <p className="hero-subtitle">
          Explore the power of GNNs — learn how they work, why they matter, and
          download a ready-to-use model for your own projects.
        </p>
        <div className="hero-actions">
          <a href="/gnn_model.zip" download className="btn btn-primary">
            ↓ Download Model
          </a>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Key Points */}
      <section className="section">
        <h2 className="section-title">Why Graph Neural Networks?</h2>
        <div className="cards">
          <div className="card">
            <span className="card-icon">🔗</span>
            <h3>Relational Data</h3>
            <p>
              Unlike traditional neural networks, GNNs are designed to work
              directly on graph-structured data — social networks, molecules,
              knowledge graphs, and more.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🧠</span>
            <h3>Message Passing</h3>
            <p>
              GNNs learn by passing messages between neighboring nodes, allowing
              each node to aggregate information from its local neighborhood to
              build powerful representations.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">📊</span>
            <h3>Versatile Tasks</h3>
            <p>
              From node classification and link prediction to graph-level
              classification, GNNs handle a wide variety of tasks on
              non-Euclidean data.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">⚡</span>
            <h3>State of the Art</h3>
            <p>
              GNN architectures like GCN, GAT, and GraphSAGE have achieved
              state-of-the-art results in drug discovery, recommendation
              systems, and traffic forecasting.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🔬</span>
            <h3>Scalability</h3>
            <p>
              Modern GNNs use sampling and mini-batching techniques that allow
              them to scale to graphs with millions of nodes and edges
              efficiently.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🌐</span>
            <h3>Real-World Impact</h3>
            <p>
              GNNs power Google Maps ETA predictions, Pinterest recommendations,
              and molecular property prediction in pharmaceutical research.
            </p>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="section section-alt">
        <h2 className="section-title">How to Use the Model</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <div>
              <h3>Download</h3>
              <p>Click the download button above to get the model files.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <div>
              <h3>Install Dependencies</h3>
              <p>
                Make sure you have <code>torch</code> and{' '}
                <code>torch_geometric</code> installed in your Python
                environment.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <div>
              <h3>Load &amp; Predict</h3>
              <p>
                Load the model checkpoint with PyTorch and run inference on your
                graph data.
              </p>
            </div>
          </div>
        </div>
        <div className="code-block">
          <pre>
{`import torch
from model import GNNModel

model = GNNModel()
model.load_state_dict(torch.load("gnn_model.pth"))
model.eval()

# Run prediction on your graph
output = model(graph_data)`}
          </pre>
        </div>
      </section>
    </div>
  );
}

export default Home;
