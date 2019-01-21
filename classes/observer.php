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
 * Observer
 *
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 *
 * @package   moodle-qtype_essay
 * @copyright 2019-01-18 MFreak.nl
 * @author    Luuk Verhoeven
 **/

namespace qtype_essay;

defined('MOODLE_INTERNAL') || die;

class observer {

    /**
     * @param \mod_quiz\event\attempt_submitted $event
     */
     public static function quiz_attempt_submitted_handler(\mod_quiz\event\attempt_submitted $event) {
        echo '<pre>';
        print_r($event);
        echo '</pre>';
        die(__LINE__ . ' ' . __FILE__);
    }

}