var definitions = {
    "AJAX": "Short for Asynchronous JavaScript and XML.",
    "Algorithm": "A sequence of instructions or a set of rules that are followed to solve a task.",
    "API": "a set of functions and procedures that allow the creation of applications which access the features or data of an operating system, application, or other service..",
    "Back-end": "Sometimes referred to as \"server-side\", this refers to what a user can't see like databases or servers. It organises and stores data.",
    "Bit": "A bit (short for binary digit) is the smallest unit of measurement in computing. 8 bits make up 1 byte.",
    "BIOS": "Stands for Basic Input/Output System. It is firmware that allows you to change or view the 'settings' of the computer.",
    "Browser": "A software program that allows you to surf the web. Popular web browsers include Google Chrome, Mozilla Firefox, Microsoft Edge and Internet Explorer.",
    "Bug": "An error or flaw in the website or app that keeps it from running as expected.",
    "Cache": "When you download (read) a web page, the data is \"cached,\" meaning it is temporarily stored on your computer. The next time you want that page, instead of requesting the file from the web server, your web browser just accesses it from the cache, so the page loads quickly. The downside to this is that if the cached web page is often updated, you may miss the latest version. If you suspect that the web page you're seeing is not the latest version, use the \"refresh\" button on your browser.",
    "DBMS": "Database management system. Examples include: Oracle, MySQL, MSSQL, DB2, and some nosql varieties.",
    "Dev": "Short for \"developer\".",
    "Developer": "A person or company that creates new products, especially computer products such as software.",
    "Esoteric Programming Language": "A programming language designed to push the boundaries of computer programming language design, as a proof of concept, as software art, or as a joke.",
    "Firmware": "Firmware is a general term for the various kinds of programs built into hardware. An example of firmware would be a BIOS.",
    "Front-end": "What a user sees and interacts with on a website or app.",
    "FTP": "File transfer protocol (FTP) is a common method of transferring files via the internet from one host to another host.",
    "Gulp": "A task runner for JavaScript that allows you to automate a variety of time-consuming tasks.",
    "IDE": "Integrated Development Environment - an application that developers use for software development. IDEs will provide features such as a source code editor, debugger, and intelligent code completion.",
    "Java": "a general-purpose object-oriented programming language",
    "JPEG": "JPEG stands for Joint Photographic Experts Group, which was the committee that created the file format known as JPEG. The format is commonlyl used for photos displayed on the world wide web.",
    "LAN": "A local area network (LAN) is a system that connects computers and other devices that share a common communications line and wireless link, generally within a limited geographical area such as a home or office building.",
    "Library": "A library is a collection of precompiled routines that a program can use. The routines, sometimes called modules, are stored in object format. Libraries are particularly useful for storing frequently used routines because you do not need to explicitly link them to every program that uses them.",
    "Linux": "Linux is an operating system, based on UNIX, that is open source and is used by many developers.",
    "Microsoft Windows": "Pretty much a waste of money A commercial operating system developed by Microsoft.",
    "NLP": "Natural Language Processing, the use of machine learning or AI techniques to proccess and produce human language",
    "Object": "a value stored in memory that referenced by an identifier",
    "Object-oriented": "a type of programming organized around objects",
    "Open Source": "Software for which the original source code is made freely available and may be redistributed and modified",
    "Operating System": "An operating system is the software that helps us access resources and applications, and manages resources. Examples of operating systems are Ubuntu, Windows 10, Macintosh, Debian, and Manjaro.",
    "Process": "A process is a running computer program.",
    "PHP": "PHP is a popular general-purpose scripting language that is especially suited to web development.",
    "Programming Language": "A programming language is a type of written language that is used to provide instructions to the computer. Examples of programming languages include C, C#, C++, Java, Ruby, Python, and Go.",
    "Python": "Python is an interpreted high-level programming language for general-purpose programming.",
    "React": "A JavaScript library for building user interfaces",
    "SDK": "Software Developers Kit. A collection of tools or programs used by devlopers",
    "Software": "Software is a general term for the various kinds of programs used to operate computers and related devices.",
    "Source Code": "Source code is the collection of files containing instructions in a programming language that make up a program. Source code is commonly compiled into a program, or executable. It may also be run by an interpreter if it is an interpreted language such as Python or Ruby.",
    "Thread": "A thread is a unit of execution; i. e., a program or part of a program that a computer can execute concurrently with others. A thread is a process, or part of it.",
}

var entryTemplate = '<div class="entry"><h3 class="word">{0}</h3><p class="definition">{1}</p></div>'

let definitionDiv = document.querySelector('.definitions');
for (var property in definitions) {
    if (definitions.hasOwnProperty(property)) {
        let entry = entryTemplate.replace('{0}', property).replace('{1}', definitions[property]);
        definitionDiv.innerHTML += entry;
    }
}