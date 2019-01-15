<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Serve question type files
 *
 * @since      Moodle 2.0
 * @package    qtype_essay
 * @copyright  Dongsheng Cai <dongsheng@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

/**
 * Checks file access for essay questions.
 *
 * @package  qtype_essay
 * @category files
 *
 * @param stdClass $course        course object
 * @param stdClass $cm            course module object
 * @param stdClass $context       context object
 * @param string   $filearea      file area
 * @param array    $args          extra arguments
 * @param bool     $forcedownload whether or not force download
 * @param array    $options       additional options affecting the file serving
 *
 * @return bool
 * @throws coding_exception
 */
function qtype_essay_pluginfile($course, $cm, $context, $filearea, $args, $forcedownload, array $options = []) {
    global $CFG;
    require_once($CFG->libdir . '/questionlib.php');
    question_pluginfile($course, $context, 'qtype_essay', $filearea, $args, $forcedownload, $options);
}

function qtype_essay_before_http_headers() {
    global $PAGE;
    if (!empty($PAGE->cm->modname) &&
        $PAGE->cm->modname == 'quiz' &&
        stristr($PAGE->url->get_path(), '/mod/quiz/review.php') &&
        has_capability('mod/quiz:grade', $PAGE->context)

    ) {
        $PAGE->requires->js_call_amd('qtype_essay/saveall', 'initialise', [[]]);
    }
}