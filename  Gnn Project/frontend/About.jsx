import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About This Project</h1>
        <p>
          This project provides a pre-trained Graph Neural Network model that
          you can download and use for your own graph-based machine learning
          tasks.
        </p>
      </section>

      <section className="about-section">
        <h2>What is a Graph Neural Network?</h2>
        <p>
          A Graph Neural Network (GNN) is a type of neural network designed to
          work directly on graph-structured data. Graphs are made up of
          <strong> nodes</strong> (entities) and <strong>edges</strong>{' '}
          (relationships between them). Traditional neural networks like CNNs
          and RNNs assume data comes in grids or sequences, but many real-world
          problems — social networks, molecular structures, transportation
          systems — are naturally represented as graphs.
        </p>
        <p>
          GNNs solve this by learning representations that respect the
          topology of the graph. Each node learns a representation by
          aggregating information from its neighbors through a process called
          <em> message passing</em>.
        </p>
      </section>

      <section className="about-section">
        <h2>How Does the Model Work?</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>1. Input</h3>
            <p>
              The model takes a graph as input, where each node has a feature
              vector and edges define connectivity.
            </p>
          </div>
          <div className="info-item">
            <h3>2. Message Passing Layers</h3>
            <p>
              Over multiple layers, each node aggregates features from its
              neighbors. This allows information to propagate across the graph.
            </p>
          </div>
          <div className="info-item">
            <h3>3. Readout</h3>
            <p>
              For graph-level tasks, node features are pooled into a single
              graph-level representation. For node-level tasks, each node's
              final embedding is used directly.
            </p>
          </div>
          <div className="info-item">
            <h3>4. Prediction</h3>
            <p>
              The final representation is passed through a classifier or
              regressor to produce predictions.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Technologies Used</h2>
        <div className="tech-list">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">PyTorch</span>
          <span className="tech-tag">PyTorch Geometric</span>
          <span className="tech-tag">NumPy</span>
          <span className="tech-tag">Scikit-learn</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">Vite</span>
        </div>
      </section>

      <section className="about-section">
        <h2>Key GNN Architectures</h2>
        <div className="arch-list">
          <div className="arch-item">
            <h3>GCN — Graph Convolutional Network</h3>
            <p>
              Introduced by Kipf &amp; Welling (2017). Extends convolutions to
              graphs using spectral graph theory. Simple, effective, and widely
              used as a baseline.
            </p>
          </div>
          <div className="arch-item">
            <h3>GAT — Graph Attention Network</h3>
            <p>
              Uses attention mechanisms to weigh neighbor contributions
              differently. Allows the model to focus on the most relevant
              neighbors for each node.
            </p>
          </div>
          <div className="arch-item">
            <h3>GraphSAGE</h3>
            <p>
              Samples and aggregates features from a fixed number of neighbors,
              making it scalable to very large graphs. Supports inductive
              learning on unseen nodes.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Project Motivation</h2>
        <p>
          GNNs are one of the most exciting areas in modern machine learning,
          but getting started can be intimidating. This project aims to lower
          the barrier by providing a ready-to-use model along with clear
          documentation. Whether you're a student exploring graph learning or a
          researcher looking for a quick baseline, we hope this helps.
        </p>
      </section>
    </div>
  );
}

export default About;
