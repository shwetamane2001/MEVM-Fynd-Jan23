console.log("Aggregation query");
        //creating an aggregate query
        const aggregate= UserCollection.aggregate({
            {
                $lookup: {
                    from: "posts",
                    localField: "username",
                    foreignField: "username",
                    as:"user_posts",

                }
            }
        })