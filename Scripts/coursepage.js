document.getElementById("navbarImage").addEventListener("click",navbarImageFunc);

function navbarImageFunc(){
    window.location.href = "index.html"
};


document.getElementById("navbarSignupBtn").addEventListener("click",navbarSignupFunc);

function navbarSignupFunc (){
    window.location.href = "signupPage.html"
};


document.getElementById("navbarSigninBtn").addEventListener("click",navbarSigninFunc);

function navbarSigninFunc(){
    window.location.href = "signinPage.html"
};

let coursesArr = [
    {
      name: "Fundamentals of digital marketing",
      Image_url: "https://lh3.googleusercontent.com/21Mlc_bfmIP34V4MgJMtr1S9sGbxNGVdj7ncT_jmiQNAhvqJNYwWhnOdKuY2h57SpOuaOk_aF5dAnrz0w4tbDLVy0wxZHJCUQC3y=s500",
      Modules: "Modules: 26 ",
      Length: " 40 ",
      creater: "Created by Google",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Get a business online",
      Image_url: "https://lh3.googleusercontent.com/s40RhwlQAFPM_y7ODSiA5VH6Lhjrltnh-tz295OydaXWGxU8ujKtEEAuM7qsJkrMThodotQEjqCRPJpr724puF4OXkb4vNOysdWW6w=s500",
      Modules: "Modules: 7 ",
      Length: " 3 ",
      creater: "Created by Google",
      categories: "Digital_Marketing",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Make sure customers find you online",
      Image_url: "https://lh3.googleusercontent.com/jHVvz5HCnhayZkkNznzBmvG1Q1NOIduJe3FK9_TigCL8tQkCn6r1MMiBYVNqSJVIJhaoOSK8vRsdBjQeX9AE1Nfm6cnS8QQclvTR=s500",
      Modules: "Modules: 4 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Promote a business with online advertising",
      Image_url: "https://lh3.googleusercontent.com/MivLrLy4ftKvhLd50wEBg97R5cTOJwlNsNR3EY9Ufpsb4HsNJhjUHc7aNFk-TUP-fFgFoC7cOVbs_XJownovu_OjaXO5qBgu_cEzcv8=s500",
      Modules: "Modules: 5 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Expand a business to other countries",
      Image_url: "https://lh3.googleusercontent.com/osGU8wu8smh2rRagLrMz00riN7bjEpeNPiyw_hGes-gikvJE1EidiLpGQApVEoon3acem0B6LmGEthGQQO3GDePl9-NkneVPdgMy4w=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Digital_Marketing",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Connect with customers over mobile",
      Image_url: "https://lh3.googleusercontent.com/06tZ0JGBZsO-xYxBv2y2ulUUU152bko2dg_XGtH3d3nbB8h8e6LU8mXTDIiTtoIrNu-ATC19XXkO5bIfhoRY6QSTQIqGTk4ohFlY=s500",
      Modules: "Modules: 2 ",
      Length: " 1 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Promote a business with content",
      Image_url: "https://lh3.googleusercontent.com/Avj9o_7nTbPvK_uOc1Zt0KYjv15q2SGnbJnduJCHyeiQI45VqgB9zXxTlLqbaaPymPF97YoARvzlw5hFBXSmSK_I8YpsrfORQgze=s500",
      Modules: "Modules: 4 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Understand customers needs and online behaviours",
      Image_url: "https://lh3.googleusercontent.com/uspfwxuHCreMyY3SW9Y_Am3T-aQR3V1GeEIlLrju1N143hY2K3FR8bIQlAd89jhg60La69MdKoz3E0C5SLy2BJ2sHfqXo0e31TJ-=s500",
      Modules: "Modules: 3 ",
      Length: " 1 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Build confidence with self-promotion",
      Image_url: "https://lh3.googleusercontent.com/XM54A2-qBEHBLacN-Bv-eZ41ODgKSMN0Gv0TKqBNxtYaRTWTOY37kFcgbT9IWoillafYrjA-6f3LkFmpmfcgstZ7TygLTHI6Oa0_cg=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "How to enhance and protect your online campaign",
      Image_url: "https://lh3.googleusercontent.com/DbIXNJ6ggUxjEMDBpkVR-TcxiY5I-7thbaXUzz4ye9Vo_tupqFHriwhBjynAW2ZrnoZvC7VWNK7pxzsXbZHP2mMgOd2gMev5tSVytA=s500",
      Modules: "Modules: 12 ",
      Length: " 7 ",
      categories: "Digital_Marketing",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Land your next job",
      Image_url: "https://lh3.googleusercontent.com/IMDe00mcvV_HcBe2tKJfWQUgBzezXEuJe7eoNEO4y9fapGSYJFsH5PY2T5nBD5vgukT6pTeomd35omcGbeluWtT5Jet31E6WZgratg=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "Understand the basics of code",
      Image_url: "https://lh3.googleusercontent.com/xSKdJKOORHnSWWLioNuqEWWosEh9BIF3WoiCXCe-VH9q06EgrkJdAtMC3CB7Ok0vK1XK5Yy1sQAz4gkI5HZcAGQSEKW89m1k8cG4=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Data",
      certificate: "Free_Certificate",
      creater: "Created by Google",
      difficulty: "Beginner",
      provider: "Google"
    },
    {
      name: "How to increase productivity at work",
      Image_url: "https://lh3.googleusercontent.com/s20UWvKjnpIRU1Jkm65dawbp8MmFOWEOBAAMqnmyFu2ajQCl4U4YUV4Pwce_0Gxp2WqBtFj7TPRZt8Avh6kCUCGRbkBV21fxcJ-A=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Google"
    },
    {
      name: "Understand the basics of machine learning",
      Image_url: "https://lh3.googleusercontent.com/JoZsN_Pm4nra93a7mWI_vuZ0V6Z3bWe3zmh2mKnKvRugR-65IXuEA_xyZsBU43vQVCzznQbQ2km7PFjBn0ZxCWv9c7QmSdfta01U8A=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Google"
    },
    {
      name: "Improve your online business security",
      Image_url: "https://lh3.googleusercontent.com/w8fZxz-dbUMaBbYiikszpPYHuEdw5HVpXr3Uj59bOtsIBhVIcxNmpXVpemLtus0jqAh6EmPEgiVtBjp2AUsVldqj1rsHjL_qeXDsG54=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Google"
    },
    {
      name: "Intro to digital wellbeing",
      Image_url: "https://lh3.googleusercontent.com/jOUF5BSaTNRKtigrZjapb1yzf0VrW9WHKIH1teselkfYE6Tr0LJ2OY8OJQDuKtOYyPk5gch6mQntWzkAVms7HePMb9YdmipefsK9kw=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Google"
    },
    {
      name: "Effective networking",
      Image_url: "https://lh3.googleusercontent.com/iuT1LmE-TpyU3sR1IsS6l6_C9bTn64wFxQ3WAUjLeMdKmdY8azXOUmlwz6XNwzXnzrqC4VKpXyy2Hqf4qXl0N0Pi6Tnm2FyyEx6SC88=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "FutureLearn",
      provider: "FutureLearn"
    },
    {
      name: "Business communication",
      Image_url: "https://lh3.googleusercontent.com/KFYVfGftNwwu0FfJwbdku7julnSbkYOmkMIbdmW6uaz3lUbRL7ft2Zza9A6Y71SByHIKSNhj18Og418aT45FiWndtXFjpEBi-iMuRw=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Goodwill Community Foundation",
      provider: "Goodwill_Community"
    },
    {
      name: "Communicate your ideas through storytelling and design",
      Image_url: "https://lh3.googleusercontent.com/LzZEa0Xrc7gbrafsZQ9YUgvdxSq1u5uHcS0ZGM_eMaCsel2JYzqxCcKWObBlOAsVV2YqgSyviE0_1s_sQs-6ZjUaCv2pqZfc_EZVGk0=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      creater: " Created by OpenClassrooms",
      difficulty: "Beginner",
      provider: "Open_Classrooms"
    },
    {
      name: "Speaking in public",
      Image_url: "https://lh3.googleusercontent.com/DA7fDwtzHQMT8xbyt8FWBKY5oZuwBjPcb5iFnhG8i_R49jeobm60xVEc7Jl3W8vzz2mJolDE_o2_QKMPhj789UPLNe8iTl9NUl0n=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: " Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Organisational design: Know your organisation",
      Image_url: "https://lh3.googleusercontent.com/MXO2-kEPkKzIyCZ1GLLH_2BF5Kq0L_uMjZz_PPRF04WyJkvCeWZvSB1eYbmWsFUKic59Crape2npLYd7Jg404n_-8jOWGsiAKYRd=s500",
      Modules: "Modules: 6 ",
      Length: " 27 ",
      categories: "Career_development",
      creater: "Created by Macquarie University",
      difficulty: "Intermediate",
      provider: "Coursera"
    },
    {
      name: "Strategic Innovation: Building and Sustaining Innovative Organizations",
      Image_url: "https://lh3.googleusercontent.com/30SS7Ki_Oe9URLH2b6hWbCIuImqOW3v3T_-WGzKziZveW2zlXIHE3La2cOLaBcFIZAeYJc97jOb6Iyi-JiK8KeZS_bmt63ITKfgysdw=s500",
      Modules: "Modules: 6 ",
      Length: " 15 ",
      categories: "Career_development",
      difficulty: "Intermediate",
      creater: "Created by University of Illinois Gies Business",
      provider: "Coursera"
    },
    {
      name: "The Science of Well-Being",
      Image_url: "https://lh3.googleusercontent.com/ivwS_U0FYH5mEMSTLwbBHDkNdOczICFpP8P5LSRInva-M9am3zl2ixb1nRD_NiF1IyhjCBptHf1rh0b21H7maXPuOHM-cRgLtRDq3A=s500",
      Modules: "Modules: 10 ",
      Length: " 19 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Yale University",
      provider: "Coursera"
    },
    {
      name: "Social Psychology",
      Image_url: "https://lh3.googleusercontent.com/4Ev_kTHmBZTjOsrD8a4SUS69Suw7NxrVD0deqJ5DseLHRUlXSuvsJKO2AeYxmh-jExUDJzo9Sw7SzaP_rObtzJFxcou6ge7Ovu-6jQ=s500",
      Modules: "Modules: 7 ",
      Length: " 40 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Wesleyan University",
      provider: "Coursera"
    },
    {
      name: "Think Again III: How to Reason Inductively",
      Image_url: "https://lh3.googleusercontent.com/92_-j37T4Pwc9iW7msq1KXOu2cViwvoG_4_5Xhs7HN5iL-3JyeZmr2j_O2T-QoxNZ9NyKBvCSD9IrTYG_2wn6Zlk_-dCtRZMqRCpqh8=s500",
      Modules: "Modules: 5 ",
      Length: " 14 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Duke University",
      provider: "Coursera"
    },
    {
      name: "Google Cloud Platform Fundamentals: Core Infrastructure",
      Image_url: "https://lh3.googleusercontent.com/GlW6N5fh_YNcZXfuhnNEqoAarbAtcCIHDq1y8PXhO5iZp7Kx5g5qBsNhoNDvmIhqx4LCfHBp56sJlkALhYViSMS65zmxpptVfGIq=s500",
      Modules: "Modules: 9 ",
      Length: " 11 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Google Cloud",
      provider: "Coursera"
    },
    {
      name: "Google Cloud Platform Big Data and Machine Learning Fundamentals",
      Image_url: "https://lh3.googleusercontent.com/UPLbfm-wgTtykgUR9IxPYy_08O-9q4dB4SD3FdgbLTMtaQZ8zTwtM-nD_tO5sCLvz9W7B2T4jCFQ2Si9wpRT7jGLH7up5MygzPKgfwA=s500",
      Modules: "Modules: 7 ",
      Length: " 11 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Google Cloud",
      provider: "Coursera"
    },
    {
      name: "Machine Learning Crash Course",
      Image_url: "https://lh3.googleusercontent.com/a6-Fn6QYPIOWqeIhyWUjHQ4Ovq_Rg17PPmQB868yYitufWmH24UA3tKYWVhSTb0sGCcYftOhkF9CFzvxGGjUC-O6aBi25ubPLpgj=s500",
      Modules: "Modules: 3 ",
      Length: " 15 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by Google",
      provider: "Google"
    },
    {
      name: "Elements of AI",
      Image_url: "https://lh3.googleusercontent.com/Sr3PZf6iuFBn7VWIqPzDvMAn_RMUBG8rUc0eB60sE6wdAqCdeMPWiUjnAR4-JWsHjGfy75eQqP3U0qSAbf7Tri3mfmkpa3xvtJeLS-k=s500",
      Modules: "Modules: 6 ",
      Length: " 30 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by University of Helsinki and Reaktor",
      provider: "Helsinki_University"
    },
    {
      name: "Building AI",
      Image_url: "https://lh3.googleusercontent.com/IS3PI6o4lEi5gB_UtUJ1vTY-5-BVJ0A7bE1wGbIAQtMLxvx6kgMQU9USsj0aFnvt58_eMtc77oN7fBR6CJo4QVdHMLfiajt0NBGbPd8NhlTnJpUtUx8=s500",
      Modules: "Modules: 5 ",
      Length: " 50 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by University of Helsinki and Reaktor",
      provider: "Helsinki_University"
    },
    {
      name: "Technical Support Fundamentals",
      Image_url: "https://lh3.googleusercontent.com/LdIVyNdG2nWD5N_qT76NKWso_RTp5xWH7NuxnTgnhrM6aFrgdD1jIZLVVw6_TrmSdVmLcOuVH7pNqjBrSQ8Rzxln1gHJqCB5TtpU=s500",
      Modules: "Modules: 7 ",
      Length: " 19 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    },
    {
      name: "Customer Segmentation and Prospecting",
      Image_url: "https://lh3.googleusercontent.com/mb3ZyY-MDJUIPVKgXtyFoiREBFaCHuLWEy2vMY-pkK0QJo3-GnYTH1z8DoCxt3-sJaQSlJil5uztRZ2SZtO3E4zUntzCQ2MmgqmMLRk=s500",
      Modules: "Modules: 4 ",
      Length: " 10 ",
      categories: "Digital_Marketing",
      difficulty: "Beginner",
      creater: "Created by Northwestern University",
      provider: "Coursera"
    },
    {
      name: "Fundamentals of Graphic Design",
      Image_url: "https://lh3.googleusercontent.com/CS_YZ6a7EV1Wn5haj3BZJfv-ApU9J-qNGsjF6KZRIpYHDjT7wC6B6P3yrQrC9UtM0BOrVUIWncsimt7yEQ3pker32jblgwUpDGvvhg=s500",
      Modules: "Modules: 4 ",
      Length: " 14 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by California institute of Arts",
      provider: "Coursera"
    },
    {
      name: "Conflict Transformation",
      Image_url: "https://lh3.googleusercontent.com/jCmHUNeGFd3OWnFvgLvEfoS6-Ffcf8PSxzjsOWYKEI8QFKPeUDdCZEHXIu-6P_YZjypASVdevNl-jI3M5AiowBhgpm8LVRh19Am6MQ=s500",
      Modules: "Modules: 5 ",
      Length: " 15 ",
      categories: "Career_development",
      creater: "Created by Emory University",
      difficulty: "Beginner",
      provider: "Coursera"
    },
    {
      name: "Inspiring Leadership through Emotional Intelligence",
      Image_url: "https://lh3.googleusercontent.com/35GEtrmTYa3wnv5pKIpyjoCxkfsnhao8u2vU0XVUPZdFGSQLh4EFp82PayuRCZXmUg_xBHpD7ERCF0LSwg3BBEqeHa6LSUV0oK0T=s500",
      Modules: "Modules: 8 ",
      Length: " 24 ",
      categories: "Career_development",
      difficulty: "Intermediate",
      creater: "Created by Case Western Resverse University",
      provider: "Coursera"
    },
    {
      name: "Foundations of Everyday Leadership",
      Image_url: "https://lh3.googleusercontent.com/etloB4jSHk2gmB3Y_Z2dCZUOpREyiGUqAuSiVcImz3LFVfqDXgh1pAGELm9T2juTbiGwQCEh-dv5-swcHKcsXF4EF_s064Ra7n39=s500",
      Modules: "Modules: 5 ",
      Length: " 15 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Illinois Gies Business",
      provider: "Coursera"
    },
    {
      name: "Securing Digital Democracy",
      Image_url: "https://lh3.googleusercontent.com/qLA4dZTQ8W1xfraYw8ULAEnGiTExKB-ehM5he1rBZWRd85BqkOmC0xEq_qkkk0RJPGPdVbLFsebGWA4gFCPhiaA3ax59MQ8GMy_KXw=s500",
      Modules: "Modules: 5 ",
      Length: " 17 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by University of Michigan",
      provider: "Coursera"
    },
    {
      name: "English for Career Development",
      Image_url: "https://lh3.googleusercontent.com/lDhWNiBvSKf_-s0AcxxDDsLFr_5g076z-I8BG6g_L-l4CEbAsQNNwMzHHNORiHLRDFXt5t4OkNR8yMDRe0QXk7hhAR3SDv5odf_JZQ=s500",
      Modules: "Modules: 8 ",
      Length: " 22 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Pennsylvania",
      provider: "Coursera"
    },
    {
      name: "Computational Thinking for Problem Solving",
      Image_url: "https://lh3.googleusercontent.com/Ole6pwG02fEYdtUjT3ljzsAyBATKVMFvxUdrfFnhnZRMUAlgh9YRa4mHfTRRTOCAGE4ciuPtYNUagrCE_cMGVXj6IYtQAt1dyUaORg=s500",
      Modules: "Modules: 4 ",
      Length: " 34 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Pennsylvania",
      provider: "Coursera"
    },
    {
      name: "Preparing to Manage Human Resources",
      Image_url: "https://lh3.googleusercontent.com/OHfiasZP7BikYLV9oTA58D35Pbgi9S9Z1rO7jRbU0o6eMY5aYFQxfYWcZ5HugFATDfv5YlOo7u7KAMYNFmIf5HO-IBjV_8XFPuThJA=s500",
      Modules: "Modules: 4 ",
      Length: " 19 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Minnesota",
      provider: "Coursera"
    },
    {
      name: "Influencing People",
      Image_url: "https://lh3.googleusercontent.com/KoWLVeZTsuJRbyjFbYdI6X2b-DIUln236FeO7yDoWQ_TO0QVqa4kxqnWfvJJbQHv1hd44rDGjGL62PiNitdOUdiNPrQaHa7vw2IZ=s500",
      Modules: "Modules: 4 ",
      Length: " 13 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Michigan",
      provider: "Coursera"
    },
    {
      name: "Programming for Everybody (Getting Started with Python)",
      Image_url: "https://lh3.googleusercontent.com/HLKfiF9JmCZoidBFaU_4TC-W5_WBEtaJEKPld9KddlnBZ4Q3fntQfNYnfoDUG7bu80GG66iDtl8TK6ES597Msd119ZuZJrfIOVgv=s500",
      Modules: "Modules: 7 ",
      Length: " 12 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Michigan",
      provider: "Coursera"
    },
    {
      name: "Model Thinking",
      Image_url: "https://lh3.googleusercontent.com/7EyPrIv2ACfW49FhgsMTkq-Jfs7NP6UlpCcFOzxh3YEtruIe1qcMoD_xGXdciUYsyfqinZDonCcABnKJrnUujfr6x-SjbEC7GSw0jvY=s500",
      Modules: "Modules: 12 ",
      Length: " 32 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Michigan",
      provider: "Coursera"
    },
    {
      name: "Business Writing",
      Image_url: "https://lh3.googleusercontent.com/Br-x4A4S6zXzY2SZ-9Bsj4xrjLdJkA-nqTdsNtdbRoS9YhkZEoLaTjuCgxgWaDJ-0OCkn99Od1ex_gptglGoFVkoXL5GUBOUkp9JMQ=s500",
      Modules: "Modules: 4 ",
      Length: " 13 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Colorado Boulder",
      provider: "Coursera"
    },
    {
      name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      Image_url: "https://lh3.googleusercontent.com/RIjlQ2hyO4QAZ4hEzYBky7jgpfT1KAETkq4K_TS-46VAc6TXLRnp0urecxLNoi7hQsZsE8Da-vChQbivfRZOo_IWNxF8Xa2_8Snd=s500",
      Modules: "Modules: 4 ",
      Length: " 31 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by The Hong Kong University of Science and Technology",
      provider: "Coursera"
    },
    {
      name: "Organizational Design and Management",
      Image_url: "https://lh3.googleusercontent.com/W-7GNLvzauDFmAfaYUUMhHVPoNivCze3Ip4M_qv97QgsLr7SLMvx_osvnE3upKZVw7aEuOQFAs6Z8VHCm6_ufBGG5624dl6OpwdJtn0=s500",
      Modules: "Modules: 4 ",
      Length: " 32 ",
      categories: "Career_development",
      difficulty: "Intermediate",
      creater: "Created by HEC Paris",
      provider: "Coursera"
    },
    {
      name: "Search Engine Optimization Fundamentals",
      Image_url: "https://lh3.googleusercontent.com/1CAfV2X7uO_KWp2Ao-FKP39AiuxiAprdlZuJ_BaymkfBapkEezYw26UmclTchM7w34lJ_8US8M8Hvx0_9VNP6XD21OxKOAzQC3aXOUc=s500",
      Modules: "Modules: 4 ",
      Length: " 13 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of California, Davis",
      provider: "Coursera"
    },
    {
      name: "Research Proposal: Initiating Research",
      Image_url: "https://lh3.googleusercontent.com/FjxuS5XdNDqGxqPSO4gKJsL-RjGsqNIWxlCc2gcdfL3uO9BSTFfWmEjCkAM9zJ53if-qlNllOOi0NsxapdFJ2GUphSfFIi7uq1KHjw=s500",
      Modules: "Modules: 4 ",
      Length: " 12 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by University of California, Davis",
      provider: "Coursera"
    },
    {
      name: "Introduction to Cybersecurity for Business",
      Image_url: "https://lh3.googleusercontent.com/zyUPX3vPX6L71BCss4IoU2LltM4PQ6cblc0RTQVFh9gUGRkMqVgOHZWjjCFH7sloNFnOBdmCEAvFYjt69egX81gvTb8mFTAc3c1MwCE=s500",
      Modules: "Modules: 5 ",
      Length: " 13 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Colorado System",
      provider: "Coursera"
    },
    {
      name: "Python Basics",
      Image_url: "https://lh3.googleusercontent.com/ffI7DivLB-shucHQZ5TyYoma_z-lLnHSCnXqYa2kzUnqX8JFnGxCUlc6GKzHIPGs_65WS9wfN-kQ43-3q5jBTFvJCjMruAompdpu=s500",
      Modules: "Modules: 4 ",
      Length: " 16 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Michigan",
      provider: "Coursera"
    },
    {
      name: "Think Again I: How to Understand Arguments",
      Image_url: "https://lh3.googleusercontent.com/q-U9fXrVLGIMZS3y26imE3hqJOmIK3DDpX6-gsm-AVBSApxCF94cmZI2GA0c-52u_OxhcLEpSQPx_X-lplVjUwA6KdISFFTf71Hw=s500",
      Modules: "Modules: 5 ",
      Length: " 14 ",
      categories: "Career_development",
      creater: "Created by Duke University",
      difficulty: "Beginner",
      provider: "Coursera"
    },
    {
      name: "Content, Advertising & Social IMC",
      Image_url: "https://lh3.googleusercontent.com/rR6P0lYcZeKgtH0ZbUfiTAT29JmgUmZelR04OHFDqYQbgILp1AyRonQFuoXDWEEZkZsrqkQfu2KnviYTyChTmIc7YZVL59J8YDXW2w=s500",
      Modules: "Modules: 4 ",
      Length: " 8 ",
      categories: "Digital_Marketing",
      difficulty: "Intermediate",
      creater: "Created by Northwestern University",
      provider: "Coursera"
    },
    {
      name: "High Performance Collaboration: Leadership, Teamwork, and Negotiation",
      Image_url: "https://lh3.googleusercontent.com/_9gmXI2QyybD2q-xMvaDyEPNfBzFmnQdiOJn9ACgj9rjmOAiYCDbcj1zRDf8ATehV1H8SGHHGI082g1bPBq_Gk28qLqzqHkfX8Yv=s500",
      Modules: "Modules: 4 ",
      Length: " 14 ",
      categories: "Career_development",
      difficulty: "Intermediate",
      creater: "Created by Northwestern University",
      provider: "Coursera"
    },
    {
      name: "Exploring and Preparing your Data with BigQuery",
      Image_url: "https://lh3.googleusercontent.com/kIyQpzLx55-oaOkGDnYdwouY5pLOKsJC1-vkfUxIXJg7VihxaZF_Qv53aMJUhqLrf6UMfp2gTO5YXO7pM6l0lNnLCffVRDRG9v9B1w=s500",
      Modules: "Modules: 6 ",
      Length: " 9 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Google Cloud",
      provider: "Coursera"
    },
    {
      name: "Think Again II: How to Reason Deductively",
      Image_url: "https://lh3.googleusercontent.com/2M7Gm8Ybqbs3D_cx_rA210hgXV37RzLXwtQLvIkEcBfhZd40sBKY1j2CYG14m86ROgCBAj7bsYz-A8SMTpVFUlS2T9OPXqN-U8Pf=s500",
      Modules: "Modules: 5 ",
      Length: " 12 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Duke University",
      provider: "Coursera"
    },
    {
      name: "Basics of Inclusive Design for Online Education",
      Image_url: "https://lh3.googleusercontent.com/C7tZ8xnZFQVTQs4MEUR_PRm3MBG8HHv2V6cT3tR9uc0Qp1FZIGSnZtT-eVNDFT27vSrua_B11c9l7OyGmYrlqo9BaOBO21DeWJ65oA=s500",
      Modules: "Modules: 5 ",
      Length: " 14 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Colorado Boulder",
      provider: "Coursera"
    },
    {
      name: "Enterprise System Management and Security",
      Image_url: "https://lh3.googleusercontent.com/KDB-G5N75JlES9vUlp_EblRgcd5hgo0LVpCdOIfkMFTd4P3ZLI-nIVDHEQb97u8TRJ-SzKqeKulf3Ao8VRJ9PZRf9ipKSTqX1tRitMk=s500",
      Modules: "Modules: 5 ",
      Length: " 12 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Colorado Boulder",
      provider: "Coursera"
    },
    {
      name: "Successful Negotiation: Essential Strategies and Skills",
      Image_url: "https://lh3.googleusercontent.com/7zyVQZ03BHcAAu289-bDThf6fh7Cht7-Cse_pH38k9RLw7z3M0v1Mqm1wG4SEt3Ej8OmYzI-v8WkPqsr3tWz8giJhGlTLe75eqVR=s500",
      Modules: "Modules: 7 ",
      Length: " 14 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Michigan",
      provider: "Coursera"
    },
    {
      name: "Software Development Processes and Methodologies",
      Image_url: "https://lh3.googleusercontent.com/r4-FnqOIIjjlhhcK0f1dZs1Vz73XEj4dlQx4wcyeY8oFiPPG-FYbfTmA3eWMEKGLQTPAXPRvLzwDP8jCal1epPGK2YdDOdB_8cNxQkg=s500",
      Modules: "Modules: 4 ",
      Length: " 18 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Minnesota",
      provider: "Coursera"
    },
    {
      name: "Improving Communication Skills",
      Image_url: "https://lh3.googleusercontent.com/d1vOjrFgRYj6BfADABdrMGZvn2y8Iwb6uI_Ju0474Fnz0fL_ahK9g4DhEpkEEmm4ZbptXJi8f5EBrhTLLbc2qM3zxMyPyGugmno1=s500",
      Modules: "Modules: 4 ",
      Length: " 11 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Pennsylvania",
      provider: "Coursera"
    },
    {
      name: "Design Thinking for Innovation",
      Image_url: "https://lh3.googleusercontent.com/a-LtfRsqCWq520IPww6qlybPY3HyJxf0pw-DjzxUrSyLibyPe2xVubDpRM4lypJ-st_eLX8MtYbdGGEDbFW8pss52BMQFtrGTH1fMnI=s500",
      Modules: "Modules: 5 ",
      Length: " 10 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Virginia",
      provider: "Coursera"
    },
    {
      name: "Design Thinking for the Greater Good: Innovation in the Social Sector",
      Image_url: "https://lh3.googleusercontent.com/pnaDbrEmu6FnqE7fvHbNhixwsRfguBIYHwrrRhCeZBIPF7Ugk2rZuLafsgA2ifNq0ou5Ntk7ZLg2aBbF8A2-mDTlri-zASSwqJpSg_k=s500",
      Modules: "Modules: 4 ",
      Length: " 14 ",
      categories: "Career_development",
      creater: "Created by University of Virginia",
      difficulty: "Beginner",
      provider: "Coursera"
    },
    {
      name: "Marketing in a Digital World",
      Image_url: "https://lh3.googleusercontent.com/_mDjKvEJd02hz6TotuTY1VFksZbhXrd7Sim-W7jYX6C9rafmvwqGe6ywIz9SARp-ZsZSfcDH5My8BZCHSukz--SWXzFJVyPeF0o=s500",
      Modules: "Modules: 4 ",
      Length: " 30 ",
      categories: "Digital_Marketing",
      difficulty: "Beginner",
      creater: "Created by University of Illinois",
      provider: "Coursera"
    },
    {
      name: "Cloud Computing Concepts, Part 1",
      Image_url: "https://lh3.googleusercontent.com/MSXoWO-mSob447J_I4NsEMlNUxqNw2QnLqqRPKIYbHyAJZe2JnJW1Ln86ZodRkGWJN71dbaVj0L1pXf75c7NxkK3EopM9KpCOWsMnds=s500",
      Modules: "Modules: 5 ",
      Length: " 38 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Illinois",
      provider: "Coursera"
    },
    {
      name: "What is Social?",
      Image_url: "https://lh3.googleusercontent.com/1zvY1TzQp2a2shRi0rb1vu68RE2_CZJ3caJmYi2lvOE3PSv59YfLOTYlDf8GsCLH20cLBDuAizNXsEGlg8UrkvoPLICpUC7b0kIn=s500",
      Modules: "Modules: 4 ",
      Length: " 9 ",
      categories: "Digital_Marketing",
      difficulty: "Beginner",
      creater: "Created by Northwestern University",
      provider: "Coursera"
    },
    {
      name: "Kotlin for Java Developers",
      Image_url: "https://lh3.googleusercontent.com/Ry2A0ImSDRLq0-9fk8a0x1lYPYcxHhV-Xc55gy14EDnXv4GCVpshrcAJEaZ_kAxRCdqKbPWaOKEzCdaNoIg2DrJNeX1QEgW8CPLAVw=s500",
      Modules: "Modules: 5 ",
      Length: " 19 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by JetBrains",
      provider: "Coursera"
    },
    {
      name: "Initiating and Planning Projects",
      Image_url: "https://lh3.googleusercontent.com/SXfDICKN0pzReMhi9XPJm5rPb_DC_d3W1zW_dhn9wjcnFjKX6S5wKvEupGOgtHmRVWuY0yn0GtKDOuoP99vYBEjf4y7V6_UOgpPp=s500",
      Modules: "Modules: 6 ",
      Length: " 7 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of California, Irvine",
      provider: "Coursera"
    },
    {
      name: "SQL for Data Science",
      Image_url: "https://lh3.googleusercontent.com/mrE6Vjo_KyAoZjvnb11vlu7Q0YElTY-cj-KprCxOKOzI3IVE9bQdpCHhkzZDz6jIwaQswtpX_7nFwxHGUZciUd8HhL9KFf6WzBp4yAo=s500",
      Modules: "Modules: 4 ",
      Length: " 20 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of California, Davis",
      provider: "Coursera"
    },
    {
      name: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity",
      Image_url: "https://lh3.googleusercontent.com/yItqCFOW4Lxm0lqruq-FVAkoll-th57KjXi4-uHkGUZM56sXGeRMVr_Ns1tFwuwaXr7RzB9CEykcMRnAHUVbeoJUk8aUUD9NAS3m9h0=s500",
      Modules: "Modules: 4 ",
      Length: " 3 ",
      categories: "Career_development",
      creater: "Created by University of California, Irvine",
      difficulty: "Beginner",
      provider: "Coursera"
    },
    {
      name: "Giving Helpful Feedback",
      Image_url: "https://lh3.googleusercontent.com/U59e0nefnxaQz3KAKbdHg0IjBm2iOl3hWCEq6fGIFAesmiYVazt3CgkiinWPR5OiVpLm11YdN5buAazthpEgOwxnA_h4hMLYCU-W=s500",
      Modules: "Modules: 6 ",
      Length: " 7 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Colorado Boulder",
      provider: "Coursera"
    },
    {
      name: "Fundamentals of Network Communication",
      Image_url: "https://lh3.googleusercontent.com/32p-k-Yu39Ofm2V26-ZLH4Rjk2_T0YvNahaEUSuwR_tfaoGHEod2fqvVcKTN7QJozCF0JrIihZ6IyvJc4AcrxMjgoSS3J-hcIzCYyA=s500",
      Modules: "Modules: 5 ",
      Length: " 6 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by University of Colorado System",
      provider: "Coursera"
    },
    {
      name: "Database Management Essentials",
      Image_url: "https://lh3.googleusercontent.com/1KMT1WpEGSCa9aELdj3tD8BHtxR1jfNTCHcsGX3TyBcgXWbhK_5nBM3kI4xX9hBrm8fRIW2QaMKYhATGnRH4NNHzcdMKwFozWY4YuA=s500",
      Modules: "Modules: 11 ",
      Length: " 29 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by University of Colorado System",
      provider: "Coursera"
    },
    {
      name: "Instructional Design Foundations and Applications",
      Image_url: "https://lh3.googleusercontent.com/JEHVYbyTVl5sJXT0Ne_PKpO5MGqWJZoHurLeoA14iZRpHjhAyoWlKITaid1ClK0Aur_gg34HDFUlOj3TjPdg1YvaBKXJqyohiIZcog=s500",
      Modules: "Modules: 6 ",
      Length: " 24 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Illinois",
      provider: "Coursera"
    },
    {
      name: "Leading and Managing People-Centred Change",
      Image_url: "https://lh3.googleusercontent.com/n33bki2vsLsoK_jK0GspFBHWKZXxGtcCCfgKx4n3rPEK7SC3ddDaKCozyHDYFS4-Cft3ornA03oXPPzT77yzr3cwsCNcaqxehN0y=s500",
      Modules: "Modules: 3 ",
      Length: " 9 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Durham University and Powered by FutureLearn",
      provider: "FutureLearn"
    },
    {
      name: "What is Data Science?",
      Image_url: "https://lh3.googleusercontent.com/Jw3RCu7NqXjGBgzB-yb_JcxFWfPYCRpzdQxdk5rFABGiAiPKy2mfBMmdrwKyLfFvf3oXtfsByX-gtlXNq5PstcZS8T6Y0pAWAP-yMw=s500",
      Modules: "Modules: 3 ",
      Length: " 6 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by IBM",
      provider: "Coursera"
    },
    {
      name: "Marketing Analytics",
      Image_url: "https://lh3.googleusercontent.com/6Nq6lModCOGaAQTrA1m7QsglLdJhDFcJPek_8AZIXwL75qi6xfzahER3RY12YMd5nEX1vUgzyIuDJDqEQf_AcFspw7JFrc6B35rj6A=s500",
      Modules: "Modules: 5 ",
      Length: " 10 ",
      categories: "Digital_Marketing",
      difficulty: "Beginner",
      creater: "Created by University of Virginia and Powered by FutureLearn",
      provider: "FutureLearn"
    },
    {
      name: "Business Fundamentals: Project Management",
      Image_url: "https://lh3.googleusercontent.com/uMhrFQ0D9W2l0HCU-MJB2RUPIiOe7G_etd6a96lb3Zng-oA3Z_zPnsWRWiuulDZGFgzZvrl0I7_JdgkzQBgIeuNjX_Ni2L37hGQj=s500",
      Modules: "Modules: 4 ",
      Length: " 12 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Open University and Powered by FutureLearn",
      provider: "FutureLearn"
    },
    {
      name: "Decision Making in a Complex and Uncertain World",
      Image_url: "https://lh3.googleusercontent.com/iafxz56FyO0-v-3IB0-5NWy1qXhKlYyPam7CcyaS-Vc0YA-1CzJAD-nVm8N0nPyobZPonPvap9Lg7U-oatrYevzqnZomb_Iha9Mymw=s500",
      Modules: "Modules: 7 ",
      Length: " 35 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by University of Groningen",
      provider: "Groningen_University"
    },
    {
      name: "Getting Started with Agile & Design Thinking",
      Image_url: "https://lh3.googleusercontent.com/X04kGWG7_NFtOc5WXwqXuJ23dDKh3r0BX2SWvA7U_9cBZbRNAeD4IjL4ItUPszQumoRNU0fqUOOqfiuBz3Pmrz30O2feW9aKhNY7=s500",
      Modules: "Modules: 4 ",
      Length: " 16 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Darden School of Business, University of Virginia",
      provider: "Darden_School"
    },
    {
      name: "Management and Leadership: Leading a Team",
      Image_url: "https://lh3.googleusercontent.com/WIj5QY73Lz88iQ1UH8hmgxU31z4JBN27uzLSTFrY0lpcQ5wOEwAGHCWnYjXGJFFdsD1vADhXGPSKWpZF1aFltBDxk5_mP__OlTdgRQ=s500",
      Modules: "Modules: 4 ",
      Length: " 12 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Open University and Powered by FutureLearn",
      provider: "FutureLearn"
    },
    {
      name: "Entrepreneurship: From Business Idea to Action",
      Image_url: "https://lh3.googleusercontent.com/W12y2zdW9jiY3h31c4XFjGzTl3EafFqk6a0zL05er5Nn51MVHv7nBdc6eVL2IH6M0-_pYx09KfyC52Ga_u5GgFzps9nCO45fJvzptg=s500",
      Modules: "Modules: 4 ",
      Length: " 16 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      creater: "Created by Kings's College London and Powered by FutureLearn",
      difficulty: "Beginner",
      provider: "FutureLearn"
    },
    {
      name: "Intro to TensorFlow for Deep Learning",
      Image_url: "https://lh3.googleusercontent.com/StFrc-H4b5VOEbRFvlYYbT7L8mO8KuZump2oROOV0lyEvAtBmfr0ARv05nhOZkEW_GoO0BbK_E51ldK20Iy2XFhcoaYH8CrJ3gnI=s500",
      Modules: "Modules: 14 ",
      Length: " 70 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Logical and Critical Thinking",
      Image_url: "https://lh3.googleusercontent.com/gE419AtlstnVitwY_JhR5A9sZZ324YkEb9zDafZrLgj7nYXz7x-B8-U-kQzhRbsW6SE0AzpPlCtqKQDPljR2IHFegh2VeHDXpMOTIRY=s500",
      Modules: "Modules: 8 ",
      Length: " 32 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by University of Auckland",
      provider: "Auckland_University"
    },
    {
      name: "Using Creative Problem Solving",
      Image_url: "https://lh3.googleusercontent.com/MoltPav4cZ-N5odefqC0P32RCBctYwRQCKgpwr7TBBYtYMbBepwrd1dANApPWlUlxOEzTHS2ltb3AqixSixMMhu1EBNZg-gaGL4H=s500",
      Modules: "Modules: 4 ",
      Length: " 12 ",
      categories: "Career_development",
      creater: "Created by National Chiao Tung University",
      difficulty: "Beginner",
      provider: "Chiao_Tung_University"
    },
    {
      name: "Mindfulness for Wellbeing and Peak Performance",
      Image_url: "https://lh3.googleusercontent.com/ZbHkbkFI4FM8NleFcJ17gbopI-YMqy9jx9IDUO7-MfubyK9CbUFN6fqy1fMStaWCvtFH8p-c0W-EuzOmezRiGTgMSdKqOqoyBRit=s500",
      Modules: "Modules: 4 ",
      Length: " 12 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Monash University",
      provider: "Monash_University"
    },
    {
      name: "Introduction to Python Programming",
      Image_url: "https://lh3.googleusercontent.com/9NVDR42_MdLZo21GGUGpcRtRtkmBabNLf9RyAy2tK-ENmpN5cXWZR3tnrzWp3BRsVVrg3LZrlOm7sbVkagi8m_OG6K2hIqFsalGb=s500",
      Modules: "Modules: 5 ",
      Length: " 25 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Version Control with Git",
      Image_url: "https://lh3.googleusercontent.com/HlGaU4kFPVyBCmlXrkP4Zfp9i2HuS_7PEUYbldGiXa1GVF9ESKDZjdmlgTBc2GwoX-jh6aJqh0NIrq_fW65GoYhGLBXgm6bV3Jmo3JY=s500",
      Modules: "Modules: 6 ",
      Length: " 30 ",
      categories: "Data",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Object-Oriented JavaScript",
      Image_url: "https://lh3.googleusercontent.com/s-67dVNeKPou_jGsR4_Whu5ih9936jzlgnkTgAGXL9Csz3N7mhYU5kDwIB3x9nh6P09l3EO_f29ubTHTxeqSDfPORhTj-zbzLWZeyw=s500",
      Modules: "Modules: 3 ",
      Length: " 15 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Introduction to Cybersecurity",
      Image_url: "https://lh3.googleusercontent.com/K-T4DRc4tl5w_deQ9jLrS7IP2IUyp-QBlnRvimX8NuxS5jo7UPo8V9FKJvEw7M_bEfsVtBiw3RZC1XJvRQ_MgXqnHbcXwFG9n998=s500",
      Modules: "Modules: 7 ",
      Length: " 35 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "SQL for Data Analysis",
      Image_url: "https://lh3.googleusercontent.com/RkTc1oJkG3xm-dQ_n5HHi14oRCTFQK7ISpJdmx66TWfz6F4X1Uc_FWfDQtbOvtBa93bDdo-r57_sVGbps2XDKgDhRIeCbZramkdADIQ=s500",
      Modules: "Modules: 6 ",
      Length: " 30 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Intro to JavaScript",
      Image_url: "https://lh3.googleusercontent.com/YJZCjLtppVBA0ASe-TxfrLTZwJaXB-0ZyouhKLQdfJM-g0FyFJlq1najecfVgAI2i9XG3U2GL8-L2GqzcSqpcczq9haanK_Ejikg=s500",
      Modules: "Modules: 7 ",
      Length: " 35 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Build Native Mobile Apps with Flutter",
      Image_url: "https://lh3.googleusercontent.com/7_2G9cY54TcyPD_M8kbJerDD4XV6vcqd6bmKIHc8WASeeQQA0RzDMrpI7YXtRtfXx7zpJhHa94lKgNTMLDkDc0Onavaw6360k238_A=s500",
      Modules: "Modules: 2 ",
      Length: " 10 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Kotlin Bootcamp for Programmers",
      Image_url: "https://lh3.googleusercontent.com/cXUAalwgiOraDZ65VA2PEC0e42mxsWVFj0kw1zeOxaf-jPgEM5oapRAmrxoU2Gh7QvV1JhFQuaEVY-XaA1NcuLqVjHAq6zSvsmRZ=s500",
      Modules: "Modules: 6 ",
      Length: " 30 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Developing Android Apps with Kotlin",
      Image_url: "https://lh3.googleusercontent.com/5ek6tJNuF2j4AUNUvRKryHS93Ph4KQXklk2jJipUPh6y3d-r03b_6sX2TORS3H0cGRyJWjP5KXseES_tIfIke3kN7shih4q47fKJ=s500",
      Modules: "Modules: 10 ",
      Length: " 50 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Udacity",
      provider: "Udacity"
    },
    {
      name: "Android developer",
      Image_url: "https://lh3.googleusercontent.com/yaIAHxYPdnw1P53bI6u9A1VbW2jrvhPRi6gKD1Usf8mQXh3OuJPjw2eT_by4P9Pm8Xa3ap4lwF9xrcLYMLYEzV-vmNPKk9nC9W2PAA=s500",
      Modules: "Modules: 10 ",
      Length: " 630 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Web developer",
      Image_url: "https://lh3.googleusercontent.com/CBCtILDebLPGFIFvmk5DNGaYU4TumpmrQood4bNwmQqG4DoH0MWcYXHJevqmmvvKNMS7srRYhpQva5Q083NErZnr29yTS1Kb-lfA=s500",
      Modules: "Modules: 7 ",
      Length: " 400 ",
      categories: "Data",
      creater: "Created by OpenClassrooms",
      difficulty: "Beginner",
      provider: "Open_Classrooms"
    },
    {
      name: "Salesforce developer",
      Image_url: "https://lh3.googleusercontent.com/TJFos1MohLSFCg_Z9wrXPYJy7wgJLXeylKCC4uFJADKTqsk_y0oCBdJ_zFkyJ5O8ELeLUkLy7Y0dky76uRLEJmiypO9OT-gbLdKezA=s500",
      Modules: "Modules: 12 ",
      Length: " 750 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Front-end developer",
      Image_url: "https://lh3.googleusercontent.com/2rCRUrdIf8uWhgOuBTyppB_fYXGMYqNflw5Gpixyqku5PJEDSWZEsWF3QUwf24eaojFzOYy-zANCHVuyobwI70x9h1_aD_V6guY3=s500",
      Modules: "Modules: 9 ",
      Length: " 750 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Learn how to learn",
      Image_url: "https://lh3.googleusercontent.com/FSNPwjMCvQgdlitnKoCaMIm0eAOoHTplivT94Z9wjkISpnpFbF1uuO6adqfS4em5NxXSpMzYahixWpgMYYHbZ7i9EwxyuI9sWgvOkFI=s500",
      Modules: "Modules: 4 ",
      Length: " 6 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Understanding the web",
      Image_url: "https://lh3.googleusercontent.com/ssRtsXz7c6-8Y7M3zfXN12XOkJGU9kKTp4TUzaFYaNmjgzeg4ziiCT7uues77fgb0AdZ1OE7MfHOMimUNEXW4YkceQfDrClbL8-4=s500",
      Modules: "Modules: 2 ",
      Length: " 4 ",
      categories: "Digital_Marketing",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Think like a computer: the logic of programming",
      Image_url: "https://lh3.googleusercontent.com/AsGNxZ4eYDefqk6exRuO2twrqwC69xwToNdZDmj8gtyHwR968mLbyiMG1n0566fRSJ58XqZn26JXRfYhMfhP6Xwoxb1MG94VCNZx_Dc=s500",
      Modules: "Modules: 4 ",
      Length: " 8 ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Which digital job is made for you?",
      Image_url: "https://lh3.googleusercontent.com/oe6YgTNAbgT_Eh202czkDELezBJ-G7zZstx8FgPxv2FwEUYYkfeuGrnwEEbuA2D-iFvKBjzc_rgPYKCdM3VOigrtAjjOMbVK5xwomg=s500",
      Modules: "Modules: 2 ",
      Length: " 2 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Develop your career plan",
      Image_url: "https://lh3.googleusercontent.com/HRTjIc781Ti35Igmw4zxT3xvSj6cowudhuC8d6ARyGjGYB6Qi5b6YUrNzLt9wciwTW4IX4T1y-O24lVt-fU2HkOGyMHT3GIZJhiCCQ=s500",
      Modules: "Modules: 3 ",
      Length: " 6 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Build a sales strategy for your freelance business",
      Image_url: "https://lh3.googleusercontent.com/K35D9JiyyjIyvB5csNFsv-z4gBoELTmYaaShoqOV8O90s-D3okDuviTbY4cNvzp0popdfReaRJBtb2oJiFHhO3XDgWrsj6lbImEwJg=s500",
      Modules: "Modules: 3 ",
      Length: " 8 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Host a design thinking workshop",
      Image_url: "https://lh3.googleusercontent.com/xJoeofeIG5V2mPbf_SiXW-hoCgODx2c6irNP6dTOdw0ShkzksakfkO4WXYhb9sbGY8MeGaihHeU3n0aOMc1TvFLa3iOlBGvzV5pwcg=s500",
      Modules: "Modules: 2 ",
      Length: " 15 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Learn about Agile project management and SCRUM",
      Image_url: "https://lh3.googleusercontent.com/u5LvlMAR3-e8udipAQ9ZBR4LH2fGggzR3wKxNxWTXJ5iWGATOCZ5ZolwzeUQPy3OWQzL24mQUTeD6QVrQ1nRL_027NM4bK8I0faMmLA=s500",
      Modules: "Modules: 3 ",
      Length: " 15 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Build your first web pages with HTML and CSS",
      Image_url: "https://lh3.googleusercontent.com/oWGs_fWUIF5z3nXhuRW1n2CHAvVvN0_1iJQIitNg81fcjyavPfpcogRNg5eHR1FG8d0PlS8bwBM669jkV0E9ierY-8ZL-3kri-O_=s500",
      Modules: "Modules: 4 ",
      Length: " 10 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Learn programming with JavaScript",
      Image_url: "https://lh3.googleusercontent.com/wIkWKlmCz_HwLzfV3wJYMWc6tlyVfyUWOT02vVCnYLOQLvu4W4huM8FhasuzQJS3xi9UaCQLNR4FxVScRT31KSkQ5grZ3yzE39byFA=s500",
      Modules: "Modules: 3 ",
      Length: " 20 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Learn Python basics for data analysis",
      Image_url: "https://lh3.googleusercontent.com/cRKRofBUp3CX3IXCnPNv_tBVJlGZNhrKyPLGo1RsQcXwcEv8Dk018PotavbN5YPRctT1M3-5-vcW-hfXqCthHD840kYsZWWOEdgp4A=s500",
      Modules: "Modules: 4 ",
      Length: " 12 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_Classrooms"
    },
    {
      name: "Improve your soft skills",
      Image_url: "https://lh3.googleusercontent.com/DiZZ9a_cPUctLfuaJh_6rbRrcPui0DZys5gRTKK8-RnSfqc8vxC3qpEwoE3cZ-O_vvxbBfQ1LmjWqb-2B5nwPXbHbEygsvZGZUGxg5o=s500",
      Modules: "Modules: 8 ",
      Length: " 24 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by OpenClassrooms",
      provider: "Open_University"
    },
    {
      name: "Use Google to Get a New Job",
      Image_url: "https://lh3.googleusercontent.com/RId9JdZcsWSryO10onr_cjmVL2aHEdTEyt2eiUyPYbFTWK4BxNG5Nd4r2mTEyptGo4MpzLumNmdLQVkJgDCfJ1PsSQsdnSc053axsw=s500",
      Modules: "Modules: 7 ",
      Length: " 6 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Manage a Project with Digital Tools",
      Image_url: "https://lh3.googleusercontent.com/Kg8wsO786j1lJTKPCzuCPAxwpCTTF_RVhemQJQl3ZCrIDAOL-QYGV8vWST6_XBNPBK7YmeaXLph_9r1mf2FLAjZjkx2G7EMYyMjYLLs=s500",
      Modules: "Modules: 6 ",
      Length: " 7 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Use Digital Tools for Everyday Tasks",
      Image_url: "https://lh3.googleusercontent.com/GvBF-colKJtzTxRM9tOyh0erCo8ppVX9qCaa3Sby0lDtPDgh66JcQLeVR-UV7Ko-58Pyy8vAIpPkCKYVoDXbU117RAAbgF2naj0=s500",
      Modules: "Modules: 7 ",
      Length: " 7 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Communicate Effectively at Work",
      Image_url: "https://lh3.googleusercontent.com/QHTU5Hj8t1zmuYHre-gsSqgkWa85ePFoUeeHF21MEgBbst2osIuqWrv6pJFOsnH-XkCC51BZfquJXQTJ6tlhUIaGwNLYIe2DoI2B_ss=s500",
      Modules: "Modules: 6 ",
      Length: " 8 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Negotiate Your Salary",
      Image_url: "https://lh3.googleusercontent.com/bdP8daNDK8BMuukU-D29uCav99HfimBCu2Vvj2_pV66QfFgDHbw7Kbp_snsA3j4CSdHpLkZrlzR2PigXpUVr7Gt3alb9O70xvfQsGQ=s500",
      Modules: "Modules: 1 ",
      Length: " 8 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Build Your Online Business",
      Image_url: "https://lh3.googleusercontent.com/I_xkjeTMwHJtwBgY1nrqVRUFuOLXEEwArmcs_REHXRLQRlvgfIAg5axrb8Q219PSqCVPiHrOXH787F3vVD-T64w6pZ_PW0Bg7OZnvUQ=s500",
      Modules: "Modules: 8 ",
      Length: " 8 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Give and Receive Feedback",
      Image_url: "https://lh3.googleusercontent.com/vc8u2N0bmxyRV-k30D4A7PAelnFztlj8FAf8_-GdFaIqteDqG9twLUU9fpVQx-XXqCJj6LmysF8WFmNGneJxDf2E22rBrsHtad4s=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Plan Effective Meetings",
      Image_url: "https://lh3.googleusercontent.com/4jPqnEN_k-zRCYTk365C6p-ceCnmH8-vS2j4tFCCDdYCPyjB7OezByGn53zWIl3r8yNXVk008Ue2u-RBiGyu1hZJLb_Lt6F9xZDYcQ=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Start a CV",
      Image_url: "https://lh3.googleusercontent.com/El2pAoYOsN3heG4n1-skS_ik4iE96w2NLiT2m7O7QsXTJ88pX3ajD6mlJBV7hqb46fT3yPTRhzrs2w-xQdL3BNxjfB-33sKY97d3Xzs=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Edit Your CV",
      Image_url: "https://lh3.googleusercontent.com/YdV9qER69nopgl9I594MfzW6F74k_4wJcFK9kB-oUIItZbEmX4pf_g-uKc0HtrojLEkJgrhDfEi_yiBtOfSylMZFgK8XClrkoVBkdQ=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Prepare For Your Business Plan",
      Image_url: "https://lh3.googleusercontent.com/LWsEVnEBIkiWNx35DyhkQE4ow9x-s0odAwq2yMEeC7VZ16aUr3neaKCdBi0BNKR2_pMKZgMG06k5DyA2H1QeOk6-emuiZ_cii69DscM=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Connect and Collaborate Anywhere with Digital Tools",
      Image_url: "https://lh3.googleusercontent.com/Ed210tDkkERnwcAuSz7fi0b1sVosEUyU5a0JKBoqp-dcjVoxNpGz37pzSjn-iF5fAAAncBiJRCQQnLIk9zTBBsfO7YFTRLZ7jf9I2A=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Write a Business Plan",
      Image_url: "https://lh3.googleusercontent.com/_UCwXgFv_U6VVexTdg51knUp352PBZWsMQtrI2TTBMUCxF9J3SOCKLjVMPs7hZZwJ5h9px3jZc4z1zOPq4Ppf4GdQNxlhBhisW-9=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Send Emails in the Workplace",
      Image_url: "https://lh3.googleusercontent.com/PpwvkQyo1L2d9BgxRBRAHgqAWjPQlZP2sNhygU1r6kwHU7RwRi-eMU44m16-Revs2T94nwZTEnneC7dY2dQ8eu0rEc9cVxHAYAbD=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Google Ads Search",
      Image_url: "https://lh3.googleusercontent.com/xNFMMMz7MYjyik3Xq0buYXB9XhWMd1VoNtpkc_WyNfQJpKPEKiDO37zBalU3PD31fUKrTEdFen6NlwPIIAGgMs009Vl1a0NO9ZWyfA=s500",
      Modules: "Modules: 9 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Google Ads Display",
      Image_url: "https://lh3.googleusercontent.com/4vE71F64eVwYJLQJFLmmcybNxSMwqnpAmnMat0uawr-hTR81RoCZflAN9uheeGa-cNBu45JRLvjbudC1GVVurrgVjRFsa26ubk7D=s500",
      Modules: "Modules: 6 ",
      Length: " 2 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Google Ads - Measurement",
      Image_url: "https://lh3.googleusercontent.com/5FnPjWtk0hNnlrc2m7xS7MC3A4amKfvP0eOhlX8VPb639oxI_lWHJTWAj8IMDvirs4zOk6rIEOcOU4UxQAz6iFxkrAVnPiY18R25z9Q=s500",
      Modules: "Modules: 8 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Shopping Ads",
      Image_url: "https://lh3.googleusercontent.com/cfj6SO361MlvysNfvlutl5GE_xV4Pd_OaMN_7g34XdH229FR5Bpb94-uvwygIWkMwt400jQIjXhKlYVZz5IBM0J9aQEVIrggv1yQ_Q=s500",
      Modules: "Modules: 7 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Google Ads Video",
      Image_url: "https://lh3.googleusercontent.com/LB7LCu4UpiQMI28nWr0QAe-5PvJ-bqB2QHpx_lFT5gCHcgn7tg0jMWykU5CZveMVwR--asc_OI8izvAoONhD4YqBWOxVAZwFat_thQ=s500",
      Modules: "Modules: 5 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Grasshopper: Learn to Code",
      Image_url: "https://lh3.googleusercontent.com/e-qCjEaBj3hfipIVi8NfyA9w-fLSMDfpXY9rDIFqSlaVZEFYkdAT1RdGx2RNZtqo7WwRMkGoVc6BxZItiHp0KeC8dzQ0lSlUTUvrWQ=s500",
      Modules: "Modules: 6 ",
      Length: " 11 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Grasshoper",
      provider: "Grasshopper"
    },
    {
      name: "Google IT Support Professional Certificate",
      Image_url: "https://lh3.googleusercontent.com/dDn0iVeR0lokXbH-ddjEUW4wbmAkv8rbVJBy1SCejjrVLivWMWDBClmxEO8WlpyAdX4_IDU9HlAC-TGRO_jOBDtQy3c9x8cVaUQr=s500",
      Modules: "Modules: 5 ",
      Length: " ~3-6 months ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    },
    {
      name: "Google IT Automation with Python Professional Certificate",
      Image_url: "https://lh3.googleusercontent.com/xNoegYH_yLUvpKgC1g1yolUg5edDnpwiwCydm4Tl-1vOIenXx5RK1QucG8o-9zwWg_dcGMwo0QfgGJXTLKwi8ZwgOXC9UCzjvdAsGQ=s500",
      Modules: "Modules: 6 ",
      Length: " ~3-6 months ",
      categories: "Data",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    },
    {
      name: "Organize Files in Drive",
      Image_url: "https://lh3.googleusercontent.com/KhpYKh81m39fRhTvzuJXKmBwaOkLc8E2y0ESdJXkyNq1oBQnO5eKxXYde48_pgnwH_11wOLlEp4-j9H7YuJMdnEaz5Q942MIa9yd1A=s500",
      Modules: "Modules: 1 ",
      Length: " 2 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Create a Presentation “All About a Topic”",
      Image_url: "https://lh3.googleusercontent.com/jz0x1gb9-yucIZ6auicts4KF-JCWl76JNdBV0MqkIDCAdVI3R4c6FdYxQlN9PKoalo1p-a3tNx-oPAfJGVirT2mhlkuwlrwQCKKj=s500",
      Modules: "Modules: 1 ",
      Length: " 2 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Create Quizzes in Google Forms",
      Image_url: "https://lh3.googleusercontent.com/Km0UdfFvQGD5SHJe8udaimOmQgy8-IbW1PoIRKHw4gw2DNHgdiy-4-xEWoeTfcviDOTHwtmr8Np4Zfz74NUHI4iuqLF-PqVTDTAexMY=s500",
      Modules: "Modules: 1 ",
      Length: " 2 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Annotate Text in Google Docs",
      Image_url: "https://lh3.googleusercontent.com/CtkdNPPiX7ZOQVyRRu0lGQlEEKI3E1ffLq89DbQNrlQZDZe8nI8mrEVXfykOyU21ofD7pH1hs16U76Bhg6hxdgmQhBF0ewTdb-U-7w=s500",
      Modules: "Modules: 1 ",
      Length: " 2 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Research and Develop a Topic",
      Image_url: "https://lh3.googleusercontent.com/ScR4HS7-0ziLqDp-dGWuT2cZPfzUrKQuAKCXJ4afmPTZneZLWZ-n6OTKvw11ewqxpS_8Bbo_RYiE-tFiMwO2R_MK60-RsP1xAaYvQA=s500",
      Modules: "Modules: 4 ",
      Length: " 4 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Intermediate",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Create a Photo Journal in Google Docs",
      Image_url: "https://lh3.googleusercontent.com/3AcQmYsLeHhIJEbaG2AtN6W1xoXVNVPTWx_Htpfc6WTvUImHKnd5BsOQUTUGltc68ieYir3HjaF6-FyVrUZs9HOvCsST2TcQqQih=s500",
      Modules: "Modules: 1 ",
      Length: " 2 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Manage Project Communication",
      Image_url: "https://lh3.googleusercontent.com/bCgzsOZTeujHkGaEBjYLha9kBN62c1CgwAL3Qfd9JoUIOl1InTeR-2eKQHQu5ysf20bJaHqTPdCW3AbhvD3EwcfybcOrq0iIz0xTkrc=s500",
      Modules: "Modules: 1 ",
      Length: " 2 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Create a budget in Google sheets",
      Image_url: "https://lh3.googleusercontent.com/Ku0jSWE6vOU015_t1L2aAO11GsxDd4uhUYBv0LLLhL6FFLFWNA6d_kSiloLKhuSeS44R52YASZSPLdYrJkSuuDkuUouFQ8GGXDvw2A=s500",
      Modules: "Modules: 7 ",
      Length: " 8 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Track due dates and tasks in Gmail",
      Image_url: "https://lh3.googleusercontent.com/4iWayUHICzG2Lc704bGV14SV_9-XqWQ-TQK2jQWTRGOZIXLiUCF_poAP7JRVxjr7TdqGow7RCuorKdvPUqhrUPbUDyzfST6RlKOu3g=s500",
      Modules: "Modules: 1 ",
      Length: " 1 ",
      categories: "Career_development",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Applied Digital Skills",
      provider: "Applied_Digital_Skills"
    },
    {
      name: "Google Cloud Computing Foundations",
      Image_url: "https://lh3.googleusercontent.com/p_pQUHpKNnngDilCLnEEpsELxOjbeSeIuizxqFy-yVnHF5oqecUQBWKjkanu7ArEeIVwm4n6MozwGQcHQPXu94x90ZdlqjZhnlXjoQ=s500",
      Modules: "Modules: 10 ",
      Length: " 30 ",
      categories: "Data",
      certificate: "Free_Certificate",
      creater: "Created by Google Cloud",
      provider: "Google_Cloud"
    },
    {
      name: "Getting Started: Create and Manage Cloud Resources",
      Image_url: "https://lh3.googleusercontent.com/Uy0ImZ9uH_R7YP-80Iy4ZhhHgKltNSB_1amUAnhQ1CFHWn9flO8_3UpFIPhEz49lA1cEe2LSeePBvKq7WqeWhuiLB153jt64xDqR=s500",
      Modules: "Modules: 6 ",
      Length: " 5 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Google Cloud",
      provider: "Google_Cloud"
    },
    {
      name: "Perform Foundational Infrastructure Tasks in Google Cloud",
      Image_url: "https://lh3.googleusercontent.com/-SPNVyyI0gVDYJqd7tvovIqjgRLrT16SS3l_BPIxD7m51VnFBoCPJdsPa09QhN1ThpPnbqEabfN2Gz0JKPFgPYFwDp23XuItHbGdgA=s500",
      Modules: "Modules: 6 ",
      Length: " 4 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Google Cloud",
      provider: "Google_Cloud"
    },
    {
      name: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
      Image_url: "https://lh3.googleusercontent.com/YQbZmLAkeBwoCYGnjvIRYKbf51GbKpmHW0M9Vn9127odRr7S0LxZ5dra717XFofydWJTZWSjFSJzJdhOYOj7lgWKTl0dCkXYayJh=s500",
      Modules: "Modules: 7 ",
      Length: " 6 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Google Cloud",
      provider: "Google_Cloud"
    },
    {
      name: "Build a Website on Google Cloud",
      Image_url: "https://lh3.googleusercontent.com/MzeH1gZ1NYq62pvoZ-mu_Jt3SiCriccSSm09LME3I_OUcOZuGbEGtKzGKDAYkDkrueitf9u7XHs3s_mtrPwpNGSQ_9XpvvAiXdlu=s500",
      Modules: "Modules: 8 ",
      Length: " 6 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Google Cloud",
      provider: "Google_Cloud"
    },
    {
      name: "Business Transformation with Google Cloud",
      Image_url: "https://lh3.googleusercontent.com/Jus-F9zL0GMS4gIPMXAUTAqVYyElLh-ST5UtegNh4NGmWKwLociQ8o0p8RXejq8yev6hSn8AxBou3YHHeP92rjdET5xXcIlOks0WuF8=s500",
      Modules: "Modules: 5 ",
      Length: " 15 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Google Cloud",
      provider: "Coursera"
    },
    {
      name: "Google Cloud Product Fundamentals",
      Image_url: "https://lh3.googleusercontent.com/66tUJS1IuXHi8HWQ9sr25GxFwm8bj6fTv0IlXdbQOWgZ7NmuYtWhmAwhWt_b7Uy8sNEIzSlPUk0TijrhJhvQ8h8zBMIVnXnnCzwQjg=s500",
      Modules: "Modules: 5 ",
      Length: " 5 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Google Cloud",
      provider: "Coursera"
    },
    {
      name: "Machine Learning for Business Professionals",
      Image_url: "https://lh3.googleusercontent.com/nnxRUy8CyaTM9_P7jOTFLW0S2NRZYtNdm7uxhixVFX_ztFrfeC7MKMrl8_N_lxOIyBCTj3bEmpWAibrmuFxkakZkFuDNwDoq8yKe5A=s500",
      Modules: "Modules: 4 ",
      Length: " 12 ",
      categories: "Data",
      difficulty: "Intermediate",
      creater: "Created by Google Cloud",
      provider: "Coursera"
    },
    {
      name: "Learn How to Create Google Search Campaigns",
      Image_url: "https://lh3.googleusercontent.com/BQIhH-uxloLzagCjy9eVL1NREdfYCTrNFXGr2rMHFT8G3WOiJjPVEivaDUsFfMcGnsegbesjYavE9I3TmMV6pCuT2cpX0_507XNO=s500",
      Modules: "Modules: 15 ",
      Length: " 2 ",
      categories: "Digital_Marketing",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Create and Manage Google Ads Video Campaigns",
      Image_url: "https://lh3.googleusercontent.com/6sgpJY_C0ltf8kmvO3G-xrKX7wS22u77WPe8PASICJPGpUPLKnBx7wh4Ko4irWtpqxcg69XeMZEU2L610dXeF54fQue9RwzZJsKZMA=s500",
      Modules: "Modules: 22 ",
      Length: " 3 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Learn How to Create and Optimize Google Display Ads Campaigns",
      Image_url: "https://lh3.googleusercontent.com/57gTFOFDvmVyTxo6Fnrb8HLIxIYpr5g2OQf-YCMw6VcTHccUkWuyAM-y4uJddwp9NtJOBtKt1zI41dfDtNKj3GFTa9TxqcgrpvVYiQ=s500",
      Modules: "Modules: 11 ",
      Length: " 1 ",
      categories: "Digital_Marketing",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Skillshop",
      provider: "Skillshop"
    },
    {
      name: "Data Science Foundations",
      Image_url: "https://lh3.googleusercontent.com/G23dJVd7YEC8Vnowh68JgAcAUW-u_m4G5F4YlRzXOgJNf3K2EtIF_yeNKQYfJ2Qx-CwEQXyVCaASf44mX-iaVt7skaA0Luw4DH88QYNxL9m6ugaIbDs=s500",
      Modules: "Modules: 6 ",
      Length: " 1.5 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Great Learning",
      provider: "Great_Learning"
    },
    {
      name: "Introduction to R",
      Image_url: "https://lh3.googleusercontent.com/GE_sKFMyTmAat644TC3uhpEGpPzYxJfGR0e5_TVgw3FbZRNwwNzKL6gFlmbire7qVdblahRaPzqWEyI7lu0mnmUtiVyw6kbTW4rrBb5OdQg_bLb_4PDJ=s500",
      Modules: "Modules: 11 ",
      Length: " 1 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Great Learning",
      provider: "Great_Learning"
    },
    {
      name: "Data Science with Python",
      Image_url: "https://lh3.googleusercontent.com/v2CHY9Hleal1zbkRXPzoPAcKWflpTeT3bRL77JackDprzjwHXTG6fa-KFhj9kZRKSuP-ht0DHy99_xec1MRWDX8xMwiFcvey_QTIS3N5caL-DMJwogE=s500",
      Modules: "Modules: 13 ",
      Length: " 8 ",
      categories: "Data",
      certificate: "Free_Certificate",
      creater: "Created by Simplilearn",
      difficulty: "Advanced",
      provider: "Simplilearn"
    },
    {
      name: "Java Training",
      Image_url: "https://lh3.googleusercontent.com/839ofAiU_i-_BfCxqwqSBgOT5s6eoOlakig-Qe0zjQx9W9GjkY7uFKzauVs8bvJ8Qa6PRRjtlOuo3NNIqHORP98-Cy4GoB6Z6bLC4g7bSu6IcLpTOame=s500",
      Modules: "Modules: 11 ",
      Length: " 9 ",
      categories: "Data",
      certificate: "Free_Certificate",
      difficulty: "Beginner",
      creater: "Created by Simplilearn",
      provider: "Simplilearn"
    },
    {
      name: "IT Support",
      Image_url: "https://lh3.googleusercontent.com/BO04jIAioXxm5upNIWvRpSi1Wvc-PAGqB1p9UltqzLi0K0TwQNf8eEqYZXu8RpRLxrQ4dbCpLE860fKNTLgaq0yZJUTP992_W0CTRimuFIcgdMRXfY4=s500",
      Modules: "Modules: 5 ",
      Length: " 110 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    },
    {
      name: "Project Management",
      Image_url: "https://lh3.googleusercontent.com/HXBWpzisP1vX45eX_w_vp35wHGnZcrJy7c3wP02Kjy_qgsnwgvrWgH51dudz8-b5DDKa-YYpltueVH7kOqSrIH51evvuyto5l6PZm3pwVNwt64DY9Q=s500",
      Modules: "Modules: 6 ",
      Length: " 140 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    },
    {
      name: "Data Analytics",
      Image_url: "https://lh3.googleusercontent.com/ZkY7L6-7ivV6M70P1zbgo2dLks9qxt5mXxCdDOn26TZOMvsEIvSCH2TlA5NtPU8jHPshnsUhPhicD1cfXIW8E0LR6KnuKklUErpFzfSSwcyKDZG5pG8=s500",
      Modules: "Modules: 8 ",
      Length: " 180 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    },
    {
      name: "UX Design",
      Image_url: "https://lh3.googleusercontent.com/4T5wG0--sWYL0cQX8c28895qjNzfUWOfsujeV8uLfMLIWgKNv72a3y7Cd20YA-lN5FAicaKNjXyPLEYB2a3GrnxOvUiN1UMq-9_4KWKCSE_qfyOP-A=s500",
      Modules: "Modules: 7 ",
      Length: " 200 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    },
    {
      name: "Digital_Marketing & E-commerce",
      Image_url: "https://lh3.googleusercontent.com/RAj_eFXgprOgyA0giZJQXJXn_1gQZXHywOzixTXH1lMPLWAt9iC8mvhy30iXBARXHaf41bml7qGMFSMDq1QXNywqT4CoO308HnSm4i5FTc3aRKS0oInl=s500",
      Modules: "Modules: 7 ",
      Length: " 240 ",
      categories: "Career_development",
      difficulty: "Beginner",
      creater: "Created by Google",
      provider: "Coursera"
    }
  ];


  allCoursesFunc(coursesArr)


  function allCoursesFunc(coursesArr){

  document.getElementById("rightContainer").innerHTML = ""
  

  coursesArr.forEach(function (elem){

    let parentdiv = document.createElement("div");

     upperChildDiv = document.createElement("div");

    let pictures = document.createElement("img");
    pictures.setAttribute("src",elem.Image_url);

    let heading = document.createElement("h3");
    heading.innerText = elem.name;

    let para = document.createElement("p");
    para.innerText = elem.creater;

    // let maindiv = document.createElement("div")

    let bolowChildDiv = document.createElement("div");


    let para2 = document.createElement("p");
    para2.innerText = elem.Modules;

    let para4 = document.createElement("p");
    para4.innerText= "Hours:"+elem.Length;

    let para5 = document.createElement("h4");
    para5.innerText= "🡪"


    
    bolowChildDiv.append(para2,para4);

    upperChildDiv.append(pictures,heading,para);

    parentdiv.append(upperChildDiv,bolowChildDiv,para5)
    document.getElementById("rightContainer").append(parentdiv);


    document.querySelector("#result").innerText = coursesArr.length;
    });
};

       document.getElementById("Digital_Marketing").addEventListener("change",categoriesFunc1);

       document.getElementById("Career_development").addEventListener("change",categoriesFunc2);

       document.getElementById("Data").addEventListener("change",categoriesFunc3);


function categoriesFunc1 (event){
  if (event.target.checked){
    filterFunc1()

  }

  else{
    allCoursesFunc(coursesArr);
  };

};



function categoriesFunc2 (event){
  if (event.target.checked){
    filterFunc2()

  }

  else{
    allCoursesFunc(coursesArr);
  };

};

function categoriesFunc3 (event){
  if (event.target.checked){
    filterFunc3()

  }

  else{
    allCoursesFunc(coursesArr);
  };

};






  function filterFunc1 (){
    let selected1 = document.querySelector("#Digital_Marketing").value;

     let filter1 = coursesArr.filter(function (elem){
      return selected1 == elem.categories;
    })

    allCoursesFunc(filter1);
  };


  function filterFunc2 (){
    let selected2 = document.querySelector("#Career_development").value;

     let filter2 = coursesArr.filter(function (elem){
      return selected2 == elem.categories;
    })

    allCoursesFunc(filter2);
  };


  function filterFunc3 (){
    let selected3 = document.querySelector("#Data").value;

     let filter3 = coursesArr.filter(function (elem){
      return selected3 == elem.categories;
    })

    allCoursesFunc(filter3);
  };





  document.querySelector("#smallLength").addEventListener("change",lengthFunc1);

  document.querySelector("#mediumLength").addEventListener("change",lengthFunc2);

  document.querySelector("#largeLength").addEventListener("change",lengthFunc3);

  document.querySelector("#extraLargeLength").addEventListener("change",lengthFunc4);


  function lengthFunc1 (event){
    if (event.target.checked){
      lengthFilterFunc1()
    }

    else{
      allCoursesFunc(coursesArr)
    };
  };

  function lengthFunc2(event){
    if (event.target.checked){
      lengthFilterFunc2()
    }
    else{
      allCoursesFunc (coursesArr)
    };
  };


  
 function lengthFilterFunc1(){
  let lengthFiltered1 = coursesArr.filter(function (elem){
    return elem.Length < 2;
  })
  allCoursesFunc(lengthFiltered1)
 };

 function lengthFilterFunc2(){
  let lengthFiltered2 = coursesArr.filter(function (elem){
    return elem.Length>=2 && elem.Length<=10;
  })

  allCoursesFunc(lengthFiltered2);

 };


 function lengthFunc3 (event){
  if (event.target.checked){
    lengthFilterFunc3()
  }
  else{
    allCoursesFunc(coursesArr)
  }
 };


 function lengthFilterFunc3 (){
  let lengthFiltered3 = coursesArr.filter(function (elem){
    return elem.Length>=11 && elem.Length<=20;
  })

  allCoursesFunc (lengthFiltered3);

 };



 function lengthFunc4 (event){
  if (event.target.checked){
    lengthFilterFunc4()
  }
  else{
    allCoursesFunc(coursesArr)
  }
 };


 function lengthFilterFunc4 (){
  let lengthFiltered4 = coursesArr.filter(function (elem){
    return elem.Length>=21;
  })

  allCoursesFunc (lengthFiltered4);

 };



 document.querySelector("#Free_Certificate").addEventListener("change",certificateFunc1);

 document.querySelector("#Paid_Certificate").addEventListener("change",certificateFunc2);

 function certificateFunc1 (event){
  if (event.target.checked){
    filterCertificateFunc1 ()
  }

  else{
    allCoursesFunc(coursesArr)
  }
 };


function filterCertificateFunc1(){
  let cSelected1 = document.querySelector("#Free_Certificate").value;

  let cFiltered1 = coursesArr.filter(function (elem){
    return cSelected1 == elem.certificate;
  })

  allCoursesFunc (cFiltered1)

};

function certificateFunc2 (event){
  if (event.target.checked){
    filterCertificateFunc2 ()
  }

  else{
    allCoursesFunc(coursesArr)
  }
 };


function filterCertificateFunc2(){
  let cSelected2 = document.querySelector("#Paid_Certificate").value;

  let cFiltered2 = coursesArr.filter(function (elem){
    return cSelected2 == elem.certificate;
  })
  document.querySelector("#result").innerText = 0;
  allCoursesFunc (cFiltered2)

};



document.querySelector("#Beginner").addEventListener("change",difficultyFunc1);

document.querySelector("#Intermediate").addEventListener("change",difficultyFunc2);

document.querySelector("#Advanced").addEventListener("change",difficultyFunc3);



function difficultyFunc1 (event){
  if (event.target.checked){
    checkDifficultyFunc1 ()
  }

  else{
    allCoursesFunc (coursesArr)
  }
};


function difficultyFunc2 (event){
  if (event.target.checked){
    checkDifficultyFunc2 ()
  }

  else{
    allCoursesFunc (coursesArr)
  }
};


function difficultyFunc3 (event){
  if (event.target.checked){
    checkDifficultyFunc3 ()
  }

  else{
    allCoursesFunc (coursesArr)
  }
};




function checkDifficultyFunc1 (){
  let dSelected1 = document.querySelector("#Beginner").value;

  let filterDifficulty1 = coursesArr.filter(function (elem){
    return dSelected1 == elem.difficulty;
  })

  allCoursesFunc (filterDifficulty1)
};


function checkDifficultyFunc2 (){
  let dSelected2 = document.querySelector("#Intermediate").value;

  let filterDifficulty2 = coursesArr.filter(function (elem){
    return dSelected2 == elem.difficulty;
  })

  allCoursesFunc (filterDifficulty2)
};


function checkDifficultyFunc3 (){
  let dSelected3 = document.querySelector("#Advanced").value;

  let filterDifficulty3 = coursesArr.filter(function (elem){
    return dSelected3 == elem.difficulty;
  })

  allCoursesFunc (filterDifficulty3)
};





// Course Provider filteration starts from here . . .


document.querySelector("#Google").addEventListener("change", providerFunc1);

document.querySelector("#Applied_Digital_Skills").addEventListener("change", providerFunc2);

document.querySelector("#Coursera").addEventListener("change", providerFunc3);

document.querySelector("#Darden_School").addEventListener("change", providerFunc4);

document.querySelector("#FutureLearn").addEventListener("change", providerFunc5);

document.querySelector("#Goodwill_Community").addEventListener("change", providerFunc6);

document.querySelector("#Google_Cloud").addEventListener("change", providerFunc7);

document.querySelector("#Grasshopper").addEventListener("change", providerFunc8);

document.querySelector("#Great_Learning").addEventListener("change", providerFunc9);

document.querySelector("#Monash_University").addEventListener("change", providerFunc10);

document.querySelector("#Chiao_Tung_University").addEventListener("change", providerFunc11);

document.querySelector("#Open_Classrooms").addEventListener("change", providerFunc12);

document.querySelector("#Simplilearn").addEventListener("change", providerFunc13);

document.querySelector("#Skillshop").addEventListener("change", providerFunc14);

document.querySelector("#Open_University").addEventListener("change", providerFunc15);

document.querySelector("#Udacity").addEventListener("change", providerFunc16);

document.querySelector("#Auckland_University").addEventListener("change", providerFunc17);

document.querySelector("#Groningen_University").addEventListener("change", providerFunc18);

document.querySelector("#Helsinki_University").addEventListener("change", providerFunc19);





function providerFunc1 (event){
  if (event.target.checked){
    checkProviderFunc1()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc1 (){
  let pSelected1 = document.querySelector("#Google").value;

  let pFiltered1 = coursesArr.filter(function (elem){
    return pSelected1 == elem.provider;
  }) 
  allCoursesFunc(pFiltered1)
};





function providerFunc2 (event){
  if (event.target.checked){
    checkProviderFunc2()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc2 (){
  let pSelected2 = document.querySelector("#Applied_Digital_Skills").value;

  let pFiltered2 = coursesArr.filter(function (elem){
    return pSelected2 == elem.provider;
  }) 
  allCoursesFunc(pFiltered2)
};





function providerFunc3 (event){
  if (event.target.checked){
    checkProviderFunc3()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc3 (){
  let pSelected3 = document.querySelector("#Coursera").value;

  let pFiltered3 = coursesArr.filter(function (elem){
    return pSelected3 == elem.provider;
  }) 
  allCoursesFunc(pFiltered3)
};




function providerFunc4 (event){
  if (event.target.checked){
    checkProviderFunc4()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc4 (){
  let pSelected4 = document.querySelector("#Darden_School").value;

  let pFiltered4 = coursesArr.filter(function (elem){
    return pSelected4 == elem.provider;
  }) 
  allCoursesFunc(pFiltered4)
};




function providerFunc5 (event){
  if (event.target.checked){
    checkProviderFunc5()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc5 (){
  let pSelected5 = document.querySelector("#FutureLearn").value;

  let pFiltered5 = coursesArr.filter(function (elem){
    return pSelected5 == elem.provider;
  }) 
  allCoursesFunc(pFiltered5)  
};




function providerFunc6 (event){
  if (event.target.checked){
    checkProviderFunc6()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc6 (){
  let pSelected6 = document.querySelector("#Goodwill_Community").value;

  let pFiltered6 = coursesArr.filter(function (elem){
    return pSelected6 == elem.provider;
  }) 
  allCoursesFunc(pFiltered6)
};




function providerFunc7 (event){
  if (event.target.checked){
    checkProviderFunc7()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc7 (){
  let pSelected7 = document.querySelector("#Google_Cloud").value;

  let pFiltered7 = coursesArr.filter(function (elem){
    return pSelected7 == elem.provider;
  }) 
  allCoursesFunc(pFiltered7)
};




function providerFunc8 (event){
  if (event.target.checked){
    checkProviderFunc8()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc8 (){
  let pSelected8 = document.querySelector("#Grasshopper").value;

  let pFiltered8 = coursesArr.filter(function (elem){
    return pSelected8 == elem.provider;
  }) 
  allCoursesFunc(pFiltered8)
};




function providerFunc9 (event){
  if (event.target.checked){
    checkProviderFunc9()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc9 (){
  let pSelected9 = document.querySelector("#Great_Learning").value;

  let pFiltered9 = coursesArr.filter(function (elem){
    return pSelected9 == elem.provider;
  }) 
  allCoursesFunc(pFiltered9)
};




function providerFunc10 (event){
  if (event.target.checked){
    checkProviderFunc10()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc10 (){
  let pSelected10 = document.querySelector("#Monash_University").value;

  let pFiltered10 = coursesArr.filter(function (elem){
    return pSelected10 == elem.provider;
  }) 
  allCoursesFunc(pFiltered10)
};




function providerFunc11 (event){
  if (event.target.checked){
    checkProviderFunc11()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc11 (){
  let pSelected11 = document.querySelector("#Chiao_Tung_University").value;

  let pFiltered11 = coursesArr.filter(function (elem){
    return pSelected11 == elem.provider;
  }) 
  allCoursesFunc(pFiltered11)
};




function providerFunc12 (event){
  if (event.target.checked){
    checkProviderFunc12()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc12 (){
  let pSelected12 = document.querySelector("#Open_Classrooms").value;

  let pFiltered12 = coursesArr.filter(function (elem){
    return pSelected12 == elem.provider;
  }) 
  allCoursesFunc(pFiltered12)
};




function providerFunc13 (event){
  if (event.target.checked){
    checkProviderFunc13()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc13 (){
  let pSelected13 = document.querySelector("#Simplilearn").value;

  let pFiltered13 = coursesArr.filter(function (elem){
    return pSelected13 == elem.provider;
  }) 
  allCoursesFunc(pFiltered13)
};




function providerFunc14 (event){
  if (event.target.checked){
    checkProviderFunc14()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc14 (){
  let pSelected14 = document.querySelector("#Skillshop").value;

  let pFiltered14 = coursesArr.filter(function (elem){
    return pSelected14 == elem.provider;
  }) 
  allCoursesFunc(pFiltered14)
};




function providerFunc15 (event){
  if (event.target.checked){
    checkProviderFunc15()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc15 (){
  let pSelected15 = document.querySelector("#Open_University").value;

  let pFiltered15 = coursesArr.filter(function (elem){
    return pSelected15 == elem.provider;
  }) 
  allCoursesFunc(pFiltered15)
};




function providerFunc16 (event){
  if (event.target.checked){
    checkProviderFunc16()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc16 (){
  let pSelected16 = document.querySelector("#Udacity").value;

  let pFiltered16 = coursesArr.filter(function (elem){
    return pSelected16 == elem.provider;
  }) 
  allCoursesFunc(pFiltered16)
};



function providerFunc17 (event){
  if (event.target.checked){
    checkProviderFunc17()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc17 (){
  let pSelected17 = document.querySelector("#Auckland_University").value;

  let pFiltered17 = coursesArr.filter(function (elem){
    return pSelected17 == elem.provider;
  }) 
  allCoursesFunc(pFiltered17)
};



function providerFunc18 (event){
  if (event.target.checked){
    checkProviderFunc18()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc18 (){
  let pSelected18 = document.querySelector("#Groningen_University").value;

  let pFiltered18 = coursesArr.filter(function (elem){
    return pSelected18 == elem.provider;
  }) 
  allCoursesFunc(pFiltered18)
};





function providerFunc19 (event){
  if (event.target.checked){
    checkProviderFunc19()
  }
  else{
    allCoursesFunc (coursesArr)
  }
};

function checkProviderFunc19 (){
  let pSelected19 = document.querySelector("#Helsinki_University").value;

  let pFiltered19 = coursesArr.filter(function (elem){
    return pSelected19 == elem.provider;
  }) 
  allCoursesFunc(pFiltered19)
};



document.querySelector("#resetformat").addEventListener("click",resetFunc);

function resetFunc (){
  allCoursesFunc (coursesArr);
};






