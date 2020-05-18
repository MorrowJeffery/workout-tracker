const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Type of exercise required"
                  },

                  name: {
                    type: String,
                    trim: true,
                    required: "Name of exercise required"
                  },

                  duration: {
                    type: Number,
                    required: "Duration required"
                  },

                  weight: {
                    type: Number
                  },

                  reps: {
                    type: Number
                  },

                  sets: {
                    type: Number
                  },

                  distance: {
                    type: Number
                  }
            }
        ]
    },

    {
        toJSON: {
            virtuals: true
          }
    }
)

workoutSchema.virtual("durationTotal").get(function () {
    return this.exercises.reduce( (total, exercise) => {
        return total + exercise.duration;
    },0 )
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;