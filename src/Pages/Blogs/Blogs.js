import React from "react";

const Blogs = () => {
  return (
    <div className="bg-slate-300">
      <div className="p-8">
        <h1 className="text-2xl my-2">1. Difference between SQL and NoSQL?</h1>
        <p className="text-xl ml-6">
          There are five practical differences between SQL and NoSQL:
        </p>
        <ul className="text-xl ml-6">
          <li>1. Language</li>
          <li>2. Scalability</li>
          <li>3. Structure</li>
          <li>4. Properties</li>
          <li>5. Support and communities</li>
        </ul>
        <h3 className="text-2xl my-1">1. Language</h3>
        <p className="text-xl ml-6">
          SQL has been around for over 40 years, so it is recognizable,
          documented, and widely-used. Safe and versatile, it’s particularly
          well suited for complex queries. However, SQL restricts the user to
          working within a predefined tabular schema, and more care must be
          taken to organize and understand the data before it is used. The
          dynamic schemata of NoSQL databases allow representation of
          alternative structures, often alongside each other, encouraging
          greater flexibility. There is less emphasis on planning, greater
          freedom when adding new attributes or fields, and the possibility of
          varied syntax across databases. As a group, however, NoSQL languages
          lack the standard interface which SQL provides, so more complex
          queries can be difficult to execute. Though there are many dialects of
          SQL, all share a common syntax and almost-identical grammar. When
          querying relational databases, fluency in one language translates to
          proficiency in most others. On the other hand, there is very little
          consistency between NoSQL languages, as they concern a diverse set of
          unrelated technologies. Many NoSQL databases have a unique data
          manipulation language constrained by particular structures and
          capabilities.
        </p>
        <h4 className="text-2xl my-1">2. Scalability</h4>
        <p className="text-xl ml-6">
          Most SQL databases can be scaled vertically, by increasing the
          processing power of existing hardware. NoSQL databases use a
          master-slave architecture which scales better horizontally, with
          additional servers or nodes. These are useful generalizations, but
          it’s important to note: SQL databases can be scaled horizontally as
          well, though sharding or partitioning logic is often the user’s onus
          and not well supported. NoSQL technologies are diverse and while many
          rely on the master-slave architecture, options for scaling vertically
          also exist. Savings made using more efficient data structures can
          overwhelm differences in scalability; most important is to understand
          the use case and plan accordingly.
        </p>

        <h4 className="text-2xl my-1">3. Structure</h4>
        <p className="text-xl ml-6">
          SQL database schemata always represent relational, tabular data, with
          rules about consistency and integrity. They contain tables with
          columns (attributes) and rows (records), and keys have constrained
          logical relationships. NoSQL databases need not stick to this format,
          but generally fit into one of four broad categories: Column-oriented
          databases transpose row-oriented RDBMSs, allowing efficient storage of
          high-dimensional data and individual records with varying attributes.
          Key-Value stores are dictionaries which access diverse objects with a
          key unique to each. Document stores hold semi-structured data: objects
          which contain all of their own relevant information, and which can be
          completely different from each other. Graph databases add the concept
          of relationships (direct links between objects) to documents, allowing
          rapid traversal of greatly connected data sets.
        </p>

        <h4 className="text-2xl my-1">4. Properties</h4>

        <p className="text-xl ml-6">
          At a high level, SQL and NoSQL comply with separate rules for
          resolving transactions. RDBMSs must exhibit four “ACID” properties:
          Atomicity means all transactions must succeed or fail completely. They
          cannot be partially-complete, even in the case of system failure.
          Consistency means that at each step the database follows invariants:
          rules which validate and prevent corruption. Isolation prevents
          concurrent transactions from affecting each other. Transactions must
          result in the same final state as if they were run sequentially, even
          if they were run in parallel. Durability makes transactions final.
          Even system failure cannot roll-back the effects of a successful
          transaction. NoSQL technologies adhere to the “CAP” theorem, which
          says that in any distributed database, only two of the following
          properties can be guaranteed at once: Consistency: Every request
          receives the most recent result, or an error. (Note this is different
          than in ACID) Availability: Every request has a non-error result,
          regardless of how recent that result is. Partition tolerance: Any
          delays or losses between nodes will not interrupt the system’s
          operation.
        </p>

        <h4 className="text-2xl my-1">5. Support and communities</h4>

        <p className="text-xl ml-6">
          SQL databases represent massive communities, stable codebases, and
          proven standards. Multitudes of examples are posted online and experts
          are available to support those new to programming relational data.
          NoSQL technologies are being adopted quickly, but communities remain
          smaller and more fractured. However, many SQL languages are
          proprietary or associated with large single-vendors, while NoSQL
          communities benefit from open systems and concerted commitment to
          onboarding users. SQL is available to most major platforms, from
          operating systems to architectures and programming languages.
          Compatibility varies more widely for NoSQL, and dependencies need to
          be investigated more carefully.
        </p>
      </div>

      <div className="p-8">
        <h1 className="text-2xl my-2">2. What is JWT, and how does it work?</h1>
        <p className="text-xl mb-1 ml-6">
          {" "}
          JSON Web Token, is an open standard used to share security information
          between two parties — a client and a server. Each JWT contains encoded
          JSON objects, including a set of claims. JWTs are signed using a
          cryptographic algorithm to ensure that the claims cannot be altered
          after the token is issued.
        </p>

        <p className="text-xl ml-6">
          Section one is the header. This section contains JWT metadata;
          typically information about the type of token and the algorithm used
          to sign it. It is encoded JSON. Section two is the payload. This is
          the content of the token and is also encoded JSON. Section three is
          the signature. This is the SHA256 (or some other HMAC) hash of the
          encoded header, encoded payload, and a secret. This part of the JWT is
          used to verify the integrity of the message. You can visit jwt.io and
          decode the token above to view the claims. A brief note about JWT
          types. A JWT is one of two types: signed or encrypted, JWS or JWE
          respectively.
        </p>
      </div>

      <div className="p-8 text-2xl">
        <h1 className="text-2xl my-2">
          3. What is the difference between javascript and NodeJS?
        </h1>

        <p className="text-xl py-1 ml-6">
          1. JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language. As a result, it is used to create network-centric
          applications. It's a networked system made for data-intensive
          real-time applications. If we compare node js vs. python, it is clear
          that node js will always be the preferred option. 2. JavaScript is a
          simple programming language that can be used with any browser that has
          the JavaScript Engine installed. Node.js, on the other hand, is an
          interpreter or execution environment for the JavaScript programming
          language. It requires libraries that can be conveniently accessed from
          JavaScript programming to be more helpful. 3. Any engine may run
          JavaScript. As a result, writing JavaScript is incredibly easy, and
          any working environment is similar to a complete browser. Node.js, on
          the other hand, only enables the V8 engine. Written JavaScript code,
          on the other hand, can run in any context, regardless of whether the
          V8 engine is supported. 4. A specific non-blocking operation is
          required to access any operating system. There are a few essential
          objects in JavaScript, but they are entirely OS-specific. Node.js, on
          the other hand, can now operate non-blocking software tasks out of any
          JavaScript programming. It contains no OS-specific constants. Node.js
          establishes a strong relationship with the system files, allowing
          companies to read and write to the hard drive. 5. The critical
          benefits of JavaScript include a wide choice of interfaces and
          interactions and just the proper amount of server contact and direct
          visitor input. Node.js, on the other hand, offers node package
          management with over 500 modules and the capacity to handle many
          requests at the same time. It also offers the unique ability to enable
          microservice architecture and the Internet of Things. Even when
          comparing node js vs. react js, node js always wins.
        </p>
      </div>

      <div className="p-8">
        <h1 className="text-2xl">4. How does NodeJS handle multiple requests at the same time?</h1>

        <p className="text-xl ml-6 my-3"> 
          Given a NodeJS application, since Node is single threaded, say if
          processing involves a Promise.all that takes 8 seconds, does this mean
          that the client request that comes after this request would need to
          wait for eight seconds? No. NodeJS event loop is single threaded. The
          entire server architecture for NodeJS is not single threaded. Before
          getting into the Node server architecture, to take a look at typical
          multithreaded request response model, the web server would have
          multiple threads and when concurrent requests get to the webserver,
          the webserver picks threadOne from the threadPool and threadOne
          processes requestOne and responds to clientOne and when the second
          request comes in, the web server picks up the second thread from the
          threadPool and picks up requestTwo and processes it and responds to
          clientTwo. threadOne is responsible for all kinds of operations that
          requestOne demanded including doing any blocking IO operations. The
          fact that the thread needs to wait for blocking IO operations is what
          makes it inefficient. With this kind of a model, the webserver is only
          able to serve as much requests as there are threads in the thread
          pool. NodeJS Web Server maintains a limited Thread Pool to provide
          services to client requests. Multiple clients make multiple requests
          to the NodeJS server. NodeJS receives these requests and places them
          into the EventQueue . NodeJS server has an internal component referred
          to as the EventLoop which is an infinite loop that receives requests
          and processes them. This EventLoop is single threaded. In other words,
          EventLoop is the listener for the EventQueue. So, we have an event
          queue where the requests are being placed and we have an event loop
          listening to these requests in the event queue. What happens next? The
          listener(the event loop) processes the request and if it is able to
          process the request without needing any blocking IO operations, then
          the event loop would itself process the request and sends the response
          back to the client by itself. If the current request uses blocking IO
          operations, the event loop sees whether there are threads available in
          the thread pool, picks up one thread from the thread pool and assigns
          the particular request to the picked thread. That thread does the
          blocking IO operations and sends the response back to the event loop
          and once the response gets to the event loop, the event loop sends the
          response back to the client. How is NodeJS better than traditional
          multithreaded request response model? With traditional multithreaded
          request/response model, every client gets a different thread where as
          with NodeJS, the simpler request are all handled directly by the
          EventLoop. This is an optimization of thread pool resources and there
          is no overhead of creating the threads for every client request.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
