import COLORS from "../../constants";
import React from "react";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  let scheduleItemsComps = [];
  scheduleItems.forEach((element) => {
    scheduleItemsComps.push(<ScheduleItem scheduleItem={element} />);
  });

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Schedule</h1>
      {scheduleItemsComps}
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3em",
    color: COLORS.primary_blue,
  },
};

export default Schedule;

const scheduleItems = [
  {
    date: "Feb 07, 2022",
    title: "Introduction to Bootcamp",
    meeting: "6:30 pm | Ford ES&T L1175",
    deliverableDue: "Feb 20, 2022 | 11:59 pm",
    notebookLink: "https://colab.research.google.com/drive/1iRbUkeACk5AxodY29TQQBfZMlzBC19Zq?usp=sharing",
    drillLink: "https://colab.research.google.com/drive/1JQWC-m1OGS9C0sEcbLnf7ARvMjMZ7RbD?usp=sharing",
    submitLink: "https://docs.google.com/document/d/1uJEqO3ddFWRS80BvmvzrODvJYsiYPiHOQgYF5IjVs_M/",
    recordingLink: "https://youtu.be/ARBB2XXeJZQ",
  },
  {
    date: "Feb 21, 2022",
    title: "Exploratory Data Analysis",
    meeting: "6:30 pm | Ford ES&T L1175",
    deliverableDue: "Mar 06, 2022 | 11:59 pm",
    notebookLink: "https://colab.research.google.com/drive/13oP0lzMM4IiiDIDb7RHHXonTdJFAsS0u?usp=sharing",
    drillLink: "https://colab.research.google.com/drive/1qes9nv_Gn2TTvqtN78cZYklj04-NM9bS?usp=sharing",
    submitLink: "https://docs.google.com/document/d/1J0M8ZEgrgHk467SmtCTAzW6x2HHLRnkB8lWV3H-gFNQ/",
    recordingLink: "",
  },
  {
    date: "Mar 07, 2022",
    title: "Introductory Data Preprocessing",
    meeting: "6:30 pm | Ford ES&T L1175",
    deliverableDue: "Mar 27, 2022 | 11:59 pm",
    notebookLink: "https://colab.research.google.com/drive/1vXISdy85yHo6rkmrHZ1rCZOnmiHwzpuo?usp=sharing",
    drillLink: "https://colab.research.google.com/drive/1klCIN9cx_9ggdY3NYPokISfuh7DO9tts?usp=sharing",
    submitLink: "https://docs.google.com/document/d/16EYHqj5g1PR5YS_fleeXmg4acHPtDLGI7j3vv7ifec8/",
    recordingLink: "https://youtu.be/cfND95l2EoI",
  },
  {
    date: "Mar 28, 2022",
    title: "Modeling with Machine Learning",
    meeting: "6:30 pm | Ford ES&T L1175",
    deliverableDue: "Apr 10, 2022 | 11:59 pm",
    notebookLink: "https://colab.research.google.com/drive/1CCYdhAOUxzeB63fR9lz8ZbeoVS6_R4Ic?usp=sharing",
    drillLink: "https://colab.research.google.com/drive/1MSh93SV_JyqSl2G6c24a0p1PN4kEimbx?usp=sharing",
    submitLink: "https://docs.google.com/document/d/1jnCDKxo1qrYtyxxFE50RRgRmzzuPf5EoHy3TkC3T09U/",
    recordingLink: "https://youtu.be/pfIcfe-gsM8",
  },
  {
    date: "Apr 11, 2022",
    title: "Introduction to Deep Learning",
    meeting: "6:30 pm | Ford ES&T L1175",
    deliverableDue: "Apr 24, 2022 | 11:59 pm",
    notebookLink: "https://colab.research.google.com/drive/1SfizHip9Cj_i5VWB9H6ITgX-nNwvXtTX?usp=sharing",
    drillLink: "https://colab.research.google.com/drive/1qes9nv_Gn2TTvqtN78cZYklj04-NM9bS?usp=sharing",
    submitLink: "https://docs.google.com/document/d/18JjKsCAcYqN2BdVx7dRWLa2wdw_fQiz7JIfrPW6SYLU/",
    recordingLink: "https://youtu.be/YbAViujobzk",
  },
];
