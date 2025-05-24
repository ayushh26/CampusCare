function Complain() {
  return (
    <div className="px-6 py-20 bg-bgLight dark:bg-bgDark text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-12 mt-20">
        Why Choose the Campus Care Grievance App?
      </h1>

      <p className="max-w-4xl mx-auto text-lg mb-8 text-center">
        The Campus Care Grievance App is designed to address a critical gap in
        communication between students, faculty, and administration by offering
        a digital, centralized, and transparent platform for submitting and
        resolving complaints. Below are the key reasons for choosing and
        developing this system:
      </p>

      <div className="max-w-4xl mx-auto space-y-6 text-justify">
        <div>
          <h2 className="font-semibold text-xl mb-1">
            1. Centralized Complaint Management
          </h2>
          <p>
            Unlike traditional paper-based or verbal systems, this app provides
            a single, unified platform where all stakeholders can log, view, and
            track grievances in real time. This reduces confusion and ensures
            that no complaint goes unnoticed.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">
            2. Promotes Transparency and Accountability
          </h2>
          <p>
            With features like automated tracking, email alerts, and admin
            response tracking, users gain confidence that their complaints are
            not only heard but also acted upon. It holds the administration
            accountable while promoting a culture of responsiveness.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">
            3. Time-Saving and Efficient
          </h2>
          <p>
            By digitizing the grievance submission process, the app eliminates
            the delays associated with manual complaint handling. Both students
            and faculty can file complaints quickly, and the administration can
            respond faster, leading to timely resolutions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">
            4. Organized Record-Keeping
          </h2>
          <p>
            Every submission is recorded in a structured database, making it
            easy to analyze patterns in grievances and generate monthly or
            yearly reports. This can help institutions identify common issues
            and take proactive measures.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">
            5. User-Friendly Interface
          </h2>
          <p>
            Built using React.js for the frontend and Java Spring Boot for the
            backend, the system is responsive, modern, and accessible from any
            device with a browser—ensuring ease of use even for non-technical
            users.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">6. Secure and Private</h2>
          <p>
            All data is transmitted securely, and personal information like roll
            numbers, emails, and messages are stored safely. Only authorized
            admins can view and act on complaints, ensuring data privacy and
            security.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">
            7. Improves Campus Environment
          </h2>
          <p>
            By giving students and staff a voice and ensuring issues are
            addressed, the app fosters a more positive, inclusive, and efficient
            educational environment. Continuous feedback and swift action can
            drastically improve day-to-day campus life.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">
            8. Scalable for Future Enhancements
          </h2>
          <p>
            The application is designed with scalability in mind. New modules
            such as chat support, complaint escalation, or real-time status
            tracking can be added later, making it future-ready.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Complain;
